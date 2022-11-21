const menubtn = document.getElementById("menubtn");
const menubar = document.getElementById("menubar");
const head = document.getElementById("head");

menubtn.addEventListener ('click' , ()=>{
    menubtn.classList.toggle("is-active");
    menubar.classList.toggle("came");
})

window.onscroll = () => {
    window.pageYOffset >= 10?
    head.classList.add("sticked"):head.classList.remove("sticked");

    menubar.classList.remove("came");
    menubtn.classList.remove("is-active");
}