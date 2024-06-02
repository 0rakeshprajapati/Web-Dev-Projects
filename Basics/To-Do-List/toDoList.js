
const input=document.getElementById("inputbox");
const listContainer=document.getElementById("list-container");

function addTask(){
    let task=input.value;
    if(task ===''){
        alert("You must wrtie something!!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=task;
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    input.value="";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


//to save and display the data even after refresh
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();


//uncomment below code to clear local storage
localStorage.clear();