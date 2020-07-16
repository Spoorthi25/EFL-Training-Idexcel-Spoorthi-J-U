var x=document.getElementById('txt')
x.addEventListener("click",enter)
var c=document.getElementById('dl')
c.addEventListener("click",del)
var s=document.getElementsByTagName('li')
for(var i=0;i<s.length;i++){
    s[i].addEventListener('click',function(){
        del1(this);
    });
}

function del1(ele){
    ele.remove()
}

function enter(){
    var y=document.getElementById('txt')
    var ul=document.getElementById('demo')
    var x=document.getElementById('shows').value
    var li=document.createElement('li')
    li.innerHTML=x
    li.setAttribute("onclick","del1(this)")
    ul.appendChild(li)
}

function del(){
    var z=document.getElementById('dl')
    var x=document.getElementById('demo')
    x.removeChild(x.firstElementChild)
}


var x1=document.getElementById('txts')
x1.addEventListener("click",enterelement)
var c1=document.getElementById('dll')
c1.addEventListener("click",delelement)
var v=document.getElementsByTagName('li')
for(var i=0;v<s.length;i++){
    v[i].addEventListener('click',function(){
        del1(this);
    });
}

function del2(ele){
    ele.remove()
}

function enterelement(){
    var ul=document.getElementById('d')
    var x=document.getElementById('dem').value
    var li=document.createElement('li')
    li.innerHTML=x
    li.setAttribute("onclick","del2(this)")
    ul.appendChild(li)
}

function delelement(){
    var x=document.getElementById('d')
    x.removeChild(x.firstElementChild)
}