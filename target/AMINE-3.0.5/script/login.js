$(document).ready(function () {
   
    $("#login").click(function () {
       var password=$("#inputEmail").val();
       var email=$("#inputPassword").val();
        $.ajax({
            url: "login",
            data: {op:"login",password: password, email: email},
            type: 'POST',
            success: function (data, textStatus, jqXHR) {
                if(data!=null){
                    window.location = "/salleJSP.jsp";

                }
               
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
                
            }
        });
    }

);

   
});


  