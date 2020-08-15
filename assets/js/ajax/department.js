$(document).ready(function() {
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