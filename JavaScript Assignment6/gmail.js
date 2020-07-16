/*function validate(){
    var email=document.getElementsById('email').value;
    var password=document.getElementsById('password').value;

    var passwordcheck = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/;

   /* (			# Start of group
        (?=.*\d)		#   must contains one digit from 0-9
        (?=.*[a-z])		#   must contains one lowercase characters
        (?=.*[A-Z])		#   must contains one uppercase characters
        (?=.*[@#$%])		#   must contains one special symbols in the list "@#$%"
                    .		#     match anything with previous condition checking
                      {6,20}	#        length at least 6 characters and maximum of 20
      )			# End of group  */
     

   /*     var emailcheck =  /\A[A-Z0-9+_.-]+@[A-Z0-9.-]+\Z/;

        if(emailcheck.test(email)){
            document.getElementById("emailerr").innerHTML = "";
        }else{
            document.getElementById("emailerr").innerHTML = "*** Email is  Invalid";

            return false;
        }

        if(passwordcheck.test(password)){
            document.getElementById("passworderr").innerHTML = "";
        }else{
            document.getElementById("passworderr").innerHTML = "*** Email is  Invalid";

            return false;
        }
}*/

function validate(){
     var text=document.getElementById("txt1").value;
     var RegExp = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
     if(RegExp.test(text))
     {
document.getElementById("lbltxt").innerHTML="Valid";
document.getElementById("lbltxt").style.visibility="visible";
document.getElementById("lbltxt").style.color="green";
}else{
    document.getElementById("lbltxt").innerHTML="Invalid";
    document.getElementById("lbltxt").style.visibility="visible";
    document.getElementById("lbltxt").style.color="red"; 
}
var text=document.getElementById("txt2").value;
   if(text==""){
    document.getElementById("lbltxt2").innerHTML="*** Please fill Password";
    document.getElementById("lbltxt2").style.visibility="visible";
    document.getElementById("lbltxt2").style.color="red"; 
    return false;
}

    else if(text.length < 5){
    document.getElementById("lbltxt2").innerHTML="*** Password length must be greater than 5 character";
    document.getElementById("lbltxt2").style.visibility="visible";
    document.getElementById("lbltxt2").style.color="red"; 
    return false;
}
else{
    document.getElementById("lbltxt2").innerHTML="Valid";
    document.getElementById("lbltxt2").style.visibility="visible";
    document.getElementById("lbltxt2").style.color="green";
}
}
