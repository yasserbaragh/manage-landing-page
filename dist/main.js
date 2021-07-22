const menu = document.querySelector(".menu");
const list = document.querySelector(".list");
const listItem = document.querySelectorAll(".list__items");

let showMenu = false;

menu.onclick = function () {

    if(!showMenu) {
        list.classList.add("open");
        listItem.forEach(item => {
        item.classList.add("open")

        showMenu = true;
    })
    } else {
        list.classList.remove("open");
        listItem.forEach(item => {
        item.classList.remove("open");

        showMenu = false;
    })
    }    
}

const testimonials = document.querySelector(".testimonials");
const children = document.querySelectorAll(".testimonial")
const array = Array.from(children);
const spans = document.querySelectorAll(".spans span");

console.log(array);

let i = 1;
spans[0].classList.add("active")
let startingX;

testimonials.addEventListener('touchstart', function (evt) {
    startingX = evt.changedTouches[0].clientX;
    console.log(startingX)
});
testimonials.addEventListener('touchmouve', function (evt) {
    var touch = evt.touches[0];
    var change = startingX - touch.clientX;
    if (change < 0) {
        return;
    }
   testimonials.style.left = -change + "px"
});
testimonials.addEventListener('touchend', function  (evt) {
    var change = evt.changedTouches[0].clientX - startingX;
    var half = -(screen.width / 4);
    var width = screen.width 
    if(change > half) {
        testimonials.style.left = 0;
        i = 0;
        spans.forEach(span => {
            span.classList.remove("active")
        })
        spans[i].classList.add("active");
    } else {
        spans.forEach(span => {
            span.classList.remove("active")
        })
        spans[i].classList.add("active")
        testimonials.style.left = (-width - 62.5) * i + "px";
        i++;
        if(i === 4) {
            i = 0
        }
    }
});











