const menu=document.querySelector("#menu");
const nav=document.querySelector("#navHolder")
menu.addEventListener("click",()=>{
    if(nav.classList.contains("hidden")){
        nav.classList.remove("hidden");
    }else{
        nav.classList.add("hidden")
    }
})