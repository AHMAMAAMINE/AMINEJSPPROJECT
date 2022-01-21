$(document).ready(function () {
   
    $("#create").click(function () {
       var email=$("#inputEmail").val();
       var password=$("#inputPassword").val();
       var confirme=$("#inputPasswordConfirm").val;
       if(password===confirme){
        $.ajax({
            url: "login",
            data: {op:"registre",password: password, email: email,confirme:confirme},
            type: 'POST',
            success: function (data, textStatus, jqXHR) {
                if(data!=null){
                    window.location = "/login.jsp";
                }
               
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
                
            }
        });
    }
 }
);

   
});


  