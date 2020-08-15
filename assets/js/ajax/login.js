$(document).ready(function() {
    $('#login').parsley();
    $( '#login' ).submit(function(e) {
        e.preventDefault();
        var formData = JSON.stringify($("#login").serializeObject());
    	  console.log(formData);
        url = server_url+'authenticate';
        $.ajax({
          type:"POST",
          url: url,
          data: formData,
          dataType: "json",
          contentType:'application/json',
          success: function(response) {
            console.log(response);
            console.log(parseJwt (response.token));
            sessionStorage.setItem("token", "Bearer "+response.token);
            console.log("token : "+response.token);
            window.location.href = client_url+"dashboard.html";
          },
          failure: function( response ) {
            alert( JP_POST_EDITOR.failureMessage );
          }
       });
    });
    
});