function hoverin(){
    document.getElementById("change").src = "ima/icons8-arrow-100 (1).png";
}

function hoverout(){
    document.getElementById("change").src = "ima/icons8-arrow-100.png";
}

function gotolink(link){
    location.href = '/reverse';
} 
  
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader--hidden");
    loader.addEventListener("transitioned", () =>{
        document.body.removeChild(loader);
    })
}) 