function validate(){
   var text=document.getElementById("user").value;
   if((text.length<=2) || (text.length > 20)){
      document.getElementById('user1').innerHTML=" **user length must be between 2 and 20";
      document.getElementById("user1").style.visibility="visible";
   document.getElementById("user1").style.color="red";
      }else{
      document.getElementById("user1").innerHTML="Valid";
   document.getElementById("user1").style.visibility="visible";
   document.getElementById("user1").style.color="green";
   }

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

var text1=document.getElementById("txt3").value;
var RegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
if(RegExp.test(text1))
{
document.getElementById("lbltxt3").innerHTML="Valid";
document.getElementById("lbltxt3").style.visibility="visible";
document.getElementById("lbltxt3").style.color="green";

}else{
document.getElementById("lbltxt3").innerHTML="Invalid";
document.getElementById("lbltxt3").style.visibility="visible";
document.getElementById("lbltxt3").style.color="red"; 

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