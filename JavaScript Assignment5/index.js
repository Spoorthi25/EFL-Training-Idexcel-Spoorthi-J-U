function addLi(){
    var txtVal=document.getElementById('txtVal').value,
            listNode=document.getElementById('list'),
            liNode=document.createElement('li'),
            txtNode=document.createTextNode(txtVal);

            liNode.appendChild(txtNode);
            listNode.appendChild(liNode);
}

function deleteNode(){
    console.log("inside Remove");
    var x=document.getElementById('list')
   /* x.removeChild(x.childNodes[1])*/
    /* x.remove();*/
    /*document.body.remove()*/
   // x.removeChild(x.firstElementChild.nextElementSibling)
   x.removeChild(x.lastElementChild.previousElementSibling)
    
}

function addList(){
    var txtVal=document.getElementById('txtval').value,
            listNode=document.getElementById('demo'),
            liNode=document.createElement('li'),
            txtNode=document.createTextNode(txtVal);

            liNode.appendChild(txtNode);
            listNode.appendChild(liNode);
}

function deleteList(){
    console.log("inside Remove");
    var x=document.getElementById('demo')
   /* x.removeChild(x.childNodes[1])*/
    /* x.remove();*/
    /*document.body.remove()*/
   // x.removeChild(x.firstElementChild.nextElementSibling)
   x.removeChild(x.lastElementChild)
    
}
function AddCss(){
    
    document.getElementById('list').classList.add('myStyle')
 }
 
 function removeCss(){
     document.getElementById('list').className=""
      
 }

 function Add(){
     document.getElementById('demo').className = "myStyle"
    
 }
 
 function remove(){
    
        document.getElementById('demo').classList.remove('myStyle')
 }

 function del(ele){
     ele.remove()
 }


 function enter(){
     listNode=document.getElementById('list'),
     txtVal=document.getElementById('txtVal').value
     liNode=document.createElement('li')
    li.innerHTML=txtVal
    li.setAttribute("onclick","del(this)")
    listNode.appendChild(li)
}

