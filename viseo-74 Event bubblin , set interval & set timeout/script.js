let button = document.getElementById("btn")
// list of all mouse events.
// https://developer.mozilla.org/en-US/docs/Web/Events


button.addEventListener("dblclick",()=>{
    // alert("I was clicked")
    document.querySelector(".box").innerHTML="<b>yaayy you were clicked</b> enjoy your click!"
})


button.addEventListener("contextmenu",()=>{
    alert("Dont hack us by Right click please")
   
})

document.addEventListener("keydown",(e)=>{
    console.log(e.key, e.keyCode)
   
})