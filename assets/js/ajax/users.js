$(document).ready(function () {
  // Date picker
  $('.inline-datepicker').datepicker({
    todayHighlight: true
  });
  $('#users').submit(function (e) {
    e.preventDefault();
    var temp = $("#users").serializeObject();
    var emp = new Object();
    emp.id = temp.emp;
    temp.emp = emp;
    console.log(temp);
    var formData = JSON.stringify(temp);
    console.log(formData);
    url = server_url + 'user/register';
    $.ajax({
      type: "POST",
      url: url,
      data: formData,
      dataType: "json",
      contentType: 'application/json',
      success: function (response) {
        console.log(response);
        /*console.log(parseJwt (response.token));
        sessionStorage.setItem("token", "Bearer "+response.token);
        console.log("token : "+response.token);*/
        window.location.href = client_url + "dashboard.html";
      },
      failure: function (response) {
        alert(JP_POST_EDITOR.failureMessage);
      }
    });
  });

});