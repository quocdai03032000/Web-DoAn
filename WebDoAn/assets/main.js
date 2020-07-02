var right_Username="admin";
var right_pw="26102000";

var inputUser=document.getElementById('email');
var inputPw=document.getElementById('pw');

var formLogin=document.getElementById('form-login');
if(formLogin.attachEvent)
{
    formLogin.attachEvent('Submit',onFormLogin);
}
else{
        formLogin.addEventListener('Submit', onFormLogin);
}

function onFormLogin(e){
    var username=inputUser.value;
    var password=inputPw.value;

    if(username==right_Username&&password==right_pw){
        alert("Đăng nhập thành công");
        location="loginSuccess.html";
    }
    else 
    {
        alert("Đăng nhập thất bại"); 
    }
}

var inputEmail=document.getElementById('username');
var inputPassword=document.getElementById('password');
var inputRepassword=document.getElementById('repassword')

// function onFormRegister(){
//     if(inputEmail.value==inputRepassword.value)
//     {
//         for(int i=0;i<=)
//     }
//     else{
//         alert("Kiểm tra lại nhập mật khẩu")
//     }
// }