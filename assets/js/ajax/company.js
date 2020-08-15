$(document).ready(function() {
    $('#company').parsley();
    $( '#company' ).submit(function(e) {
        e.preventDefault();
        var formData = JSON.stringify($("#company").serializeObject());
    	  console.log(formData);
        url = server_url+'company/compregister';
        $.ajax({
          type:"POST",
          url: url,
          data: formData,
          dataType: "json",
          contentType:'application/json',
          success: function(response) {
            console.log(response);
            window.location.href = client_url+"dashboard.html";
          },
          failure: function( response ) {
            alert( JP_POST_EDITOR.failureMessage );
          }
       });
    });
    
});