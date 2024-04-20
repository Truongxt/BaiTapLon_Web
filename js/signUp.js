
$(document).ready(function(){
    $("#txt_name").blur(function(){
        var name=$("#txt_name").val()
        var regex=/^([A-Z]{1}[a-z]*\s*)+([A-Z]{1}[a-z]*\s*)*$/
        if(regex.test(name)){
            $("#name-error").text("");
            return true;
        }
        else{
            $("#name-error").text("The name must start with a capital letter");
            return false;
        }
    })
    
    $("#txt_email").blur(function(){
        var email=$("#txt_email").val();
        var regex=/^[a-zA-Z0-9-+%.]+@[A-Za-z0-9.+]*$/;
        if(regex.test(email)){
            $("#email-error").text("");
            return true;
        }
        else{
            $("#email-error").text("Format not true");
            return false;
        }
    })
    $("#txt_password").blur(function(){
        var password=$("#txt_password").val();
        var regex=/^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*()]).{8,}$/;
        if(regex.test(password)){
            $("#password-error").text("");
            return true;
        }
        else{
            $("#password-error").text("Format not true");
            return false;
        }
    })
    $("#txt_confirmPassword").blur(function(){
        var password=$("#txt_password").val();
        var Cofirmpassword=$("#txt_confirmPassword").val();
        
        if(password==Cofirmpassword){
            $("#confirmPassword-error").text("");
            return true;
        }
        else{
            $("#confirmPassword-error").text("Comfirm Not True");
            return false;
        }
    })
    $("#btn_signUp").click(function(e){
        e.preventDefault();
        var password=$("#txt_password").val();
        var email=$("#txt_email").val();
        var name=$("#txt_name").val()
        if(password !=""&& email!="" && name!=""){  
            localStorage.setItem('name',name);
            localStorage.setItem('email',email);
            localStorage.setItem('password',password)
            window.location.href='login.html'
            alert("SignUp success")
        }
       
    })
  

})