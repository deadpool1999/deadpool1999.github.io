function User (name,age,dob,gender,subscription)
{
    var user_ = new Object() ;
    user_.name = name ;
    user_.age = Number(age) ;
    user_.dob = Date(dob) ;
    user_.gender = gender ;
    user_.subscription = subscription;
    return user_ ;
}
//user("saswat","19","18-07-2000","male","2") ;
//var User = new object() ;
//User.name = "Saswat Panda" ;
//User.age = Number(19);
//console.log(User.age) ;
/*var book = new Object();
book.firstname = "Saswat Panda" ;
console.log(book.firstname) ;
return book.firstname ;*/
window.onload = function(){
var firstName = document.getElementById("firstName") ;    
var age = document.getElementById("age") ;
var dob = document.getElementById("dob") ;
var gender = document.getElementById("Gender") ;
var subscription = document.getElementById("subs") ;
var Submit = document.getElementById("Submit") ;
//var myfirstjava = document.getElementById("myfirstjava");
var myname = document.getElementById("di");
var name;
var godown = document.getElementById("goDown") ;
godown.onclick = function(){
    document.getElementById('di').scrollIntoView(
        {
            behavior : "smooth" 
        }
    );
}
//name = myname.innerText ;

myname.innerHTML = "Hello" ;
var store = document.getElementById("store");

store.onclick = function(){
   var helloname = prompt("Username","") ;
   if(helloname!=null)
   {   //if( String(helloname) == String(myname.innerText) )
       // {
        //    print() ;
       // }
      
       myname.innerHTML = (myname.innerText + "\n" + 
                           " " + helloname + '\n' +
                           " " + Number(age.value) + '\n' + 
                           " " + dob.value + '\n' +
                           " " + gender.value + '\n' +
                           " " + subscription.value) ;
        /*var newUser = User(firstName.value,Number(age.value),dob.value,gender.value,subscription.value) ;                      
        myname.innerHTML = newUser.name + " " + newUser.age + " " + newUser.dob + " " + newUser.gender + " " + newUser.subscription ;
        console.log(newUser.name);*/
        //myname.innerHTML.toString ;                      
   }
}
//Submit.onclick = function(){
//    myname.innerHTML = myname.innerText + " " + firstName.value ;
//}
}
