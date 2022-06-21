console.log(" Ready")
var input=document.getElementById("input")
var key=document.getElementById("key")
var value=document.getElementById("value")
var storage=document.getElementById("storage")
var local=document.getElementById("local")
var data=document.getElementById("data")
var all=document.getElementById("all")

value.onclick=function(){
    localStorage.setItem(key.value,input.value);
}

local.onclick=function(){
    storage.textContent=localStorage.getItem("name");
}

data.onclick=function(){
    localStorage.removeItem("name")
}

all.onclick=function(){
    var keys=Object.keys(localStorage);
    console.log(keys);

    for(var key of keys){
        console.log("Key : "+key+" : Value : "+localStorage.getItem(key));
    }
}