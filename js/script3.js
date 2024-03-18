//navbar//

let nav = document.querySelector(".nav-wrapper")
window.onscroll= function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}


let navbar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function(a){
    a.addEventListener("click",function() {
        navCollapse.classList.remove("show");
    })
});


//counter//
document.addEventListener("DOMContentLoaded", ( )=>{

    function counter(id,start,end,duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() =>{
            current += increment,
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }

        },step);

    }
    counter("count1", 0 , 1220 , 4320),
    counter("count2", 0 , 500 , 3210),
    counter("count3", 100 , 1020 , 2200),
    counter("count4", 1000 , 720 , 2000)

});


//date-picker
    let today = new Date();
    function getDate(){

    document.getElementById("date-picker").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    
    }
    console.log(getDate());