const bar = document.querySelector('.barmenu');
const nav = document.querySelector('.nav2');

bar.addEventListener("click", function() {
    bar.classList.toggle("active");
    nav.classList.toggle("active");
})

const arrow = document.querySelector('.arrow');
// console.log(arrow);
arrow.addEventListener('click', function() {
    console.log("click");
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

    window.addEventListener("scroll", function() {
        if(window.scrollY>300){
            arrow.style.display = "block";
        }
        else {
            arrow.style.display ="none";
        }
    })