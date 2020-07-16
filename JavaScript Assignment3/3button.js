var ele;

function create(){
    ele=document.createElement("h1");
    ele.innerText="This is a heading tag";
}



function displayEle(){
    document.body.appendChild(ele);
}


function deleteEle(){
    ele.remove();
}