var todoInput=document.getElementById("input-task-here");
var todoButton=document.querySelector(".add-task");
var todoList=document.querySelector(".to-do-list");
console.log(todoButton);
todoButton.onclick=create;
todoList.onclick=checkDelete;

function create(e)
{
    if(todoInput.value.length==0)
    {
        var audio = document.getElementById("play-audio");
         audio.play(); 
         window.alert("Addition of empty task is not allowed!!!");
         e.preventDefault();
    }
    else{
    e.preventDefault();
    var newDiv=document.createElement("div");
    newDiv.classList.add("to-do");

    var newLi=document.createElement("li");
    newLi.classList.add("todo-item");
    newLi.innerHTML=todoInput.value;
    newDiv.appendChild(newLi);

    var checkbutton=document.createElement("button");
    checkbutton.classList.add("checkbtn");
    checkbutton.innerHTML='<i class="fa fa-check"></i>';
    newDiv.appendChild(checkbutton);

    var deletebutton=document.createElement("button");
    deletebutton.classList.add("deletebtn");
    deletebutton.innerHTML='<i class="fa fa-trash"></i>';
    newDiv.appendChild(deletebutton);
    todoList.appendChild(newDiv);

    todoInput.value="";
    }
}
function checkDelete(e)
{
    var item=e.target;
    if(item.classList[0]=="deletebtn"){
        var parent=item.parentNode;
        parent.remove();
    }
    if(item.classList[0]=="checkbtn"){
        var parent=item.parentNode;
        parent.classList.toggle("completed");
    }
}