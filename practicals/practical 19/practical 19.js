const form1=document.getElementById('form1');
const form2=document.getElementById('form2');
const form3=document.getElementById('form3');
var progressWidth=document.getElementById("progress");

const next1=document.getElementById('next1');
const next2=document.getElementById('next2');
const back1=document.getElementById('back1');
const back2=document.getElementById('back2');
next1.onclick=function()
{
    form1.style.left="-450px";
    form2.style.left="30px";
    progressWidth.style.width="240px";
}
back1.onclick=function()
{
    form2.style.left="450px";
    form1.style.left="30px";
    progressWidth.style.width="120px";
}

next2.onclick=function()
{
    form2.style.left="-450px";
    form3.style.left="30px";
    progressWidth.style.width="360px";
}
back2.onclick=function()
{
    form3.style.left="450px";
    form2.style.left="30px";
    progressWidth.style.width="240px";
}