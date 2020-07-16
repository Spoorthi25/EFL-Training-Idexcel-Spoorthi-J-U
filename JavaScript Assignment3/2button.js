var ele;
function LoginPage(){
    ele=document.createElement("div");

    ele0=document.createElement("h1");
    ele0.innerText="Login Page";
    ele.appendChild(ele0);

    var ele1=document.createElement("input");
    ele1.setAttribute("placeholder","User Name");
    ele.appendChild(ele1);

    var br=document.createElement("br");
    ele.appendChild(br);

    var ele2=document.createElement("input");
    ele2.setAttribute("placeholder","Password");
    ele.appendChild(ele2);

    var br1=document.createElement("br");
    ele.appendChild(br1);

    var ele3=document.createElement("input");
    ele2.setAttribute("placeholder","Email");
    ele.appendChild(ele3);

    var br2=document.createElement("br");
    ele.appendChild(br2);

    var ele4=document.createElement("input");
    ele4.setAttribute("type","submit");
    ele.appendChild(ele4);

    document.body.appendChild(ele);

}

function clearScreen() {
    ele.style.display="none";
}