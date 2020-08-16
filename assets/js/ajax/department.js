$(document).ready(function() {
  $.ajax({
    type: "GET",
    dataType: "json",
    contentType:'application/json',
    url : server_url+'dept/',
    success: function(response) {
      var j=1;
      var trHTML = '';
      $.each(response, function(i, item) {
        console.log(i+ " : "+item);
        trHTML += '<tr><td>' + j + '</td><td><div class="font-15">' + item.deptName + '</div></td><td>' + item.deptHead + '</td><td>' + item.empCount + '</td><td><button type="button" class="btn btn-icon" title="Edit"><i class="fa fa-edit"></i></button><button type="button" class="btn btn-icon js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o text-danger"></i></button></td></tr>';
        j++;
      });
      $('#deptlist').append(trHTML);
    },
    async:false
 });
    $( '#dept' ).submit(function(e) {
        e.preventDefault();
        var temp = $("#dept").serializeObject();
        console.log(temp);
        var formData = JSON.stringify(temp);
        console.log(formData);
        url = server_url+'dept/'+temp.company+'/create';
        $.ajax({
          type:"POST",
          url: url,
          data: formData,
          dataType: "json",
          contentType:'application/json',
          success: function(response) {
            console.log(response);
            //window.location.href = client_url+"dashboard.html";
          },
          failure: function( response ) {
            alert( JP_POST_EDITOR.failureMessage );
          }
       });
    });
    
  });