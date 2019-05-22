window.onload = function(){

    var username = document.getElementById("username") ;
    var password_1 = document.getElementById("userpassword") ;
    var password_2 = document.getElementById("confirmpassword") ;
    var submit = document.getElementById("submit") ;
    submit.onclick = function ()
    {
        //console.log(password_1.value);
        if(password_1.value == password_2.value)
             prompt("done") ;
        else
             alert("not done") ;    
    } ;
    
}