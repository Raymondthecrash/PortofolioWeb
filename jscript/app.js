const burgermenu= document.querySelector("#burger")
const menu= document.querySelector("#menu")
const hlinks=document.querySelectorAll("#hlink")

burgermenu.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    
})

hlinks.forEach(link=>{
    link.addEventListener("click", ()=>{
        menu.classList.toggle("hidden")
        
    })
})