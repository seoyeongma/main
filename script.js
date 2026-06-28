
const menus=document.querySelectorAll(".menu");

menus.forEach(menu=>{

menu.addEventListener("mouseenter",()=>{

menu.style.transform="scale(1.08)";

});

menu.addEventListener("mouseleave",()=>{

menu.style.transform="scale(1)";

});

});
