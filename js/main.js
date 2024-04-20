const toogle_btn=document.getElementById("toogle_btn");


// toogle_btn.addEventListener("click",function(){
//     document.getElementById("sidebar").classList.remove("hide")
// });

toogle_btn.addEventListener("click",function(){
    document.getElementById("sidebar").classList.toggle("expand")
    document.getElementById("sidebar").classList.remove("hide")
});

const close_sidebar=document.getElementById("close_sidebar");
close_sidebar.addEventListener("click",function(){
    document.getElementById("sidebar").classList.toggle("hide")
    document.getElementById("sidebar").classList.remove("expand")

})