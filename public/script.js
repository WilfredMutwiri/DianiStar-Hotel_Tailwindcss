const menu=document.querySelector("#menu");
const nav=document.querySelector("#navHolder")
menu.addEventListener("click",()=>{
    if(nav.classList.contains("invisible")){
        nav.classList.remove("invisible");
    }else{
        nav.classList.add("invisible")
    }
})