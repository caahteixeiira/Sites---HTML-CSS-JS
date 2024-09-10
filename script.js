const images = document.querySelectorAll('.header-slider ul img');
const prevBtn = document.querySelector(".control-prev");
const nextBtn = document.querySelector(".control-next");

const scrollContainer = document.querySelectorAll(".products");

let n = 0;


function changeSlider(){
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }

    images[n].style.display = "block";
}

changeSlider();

prevBtn.addEventListener("click", () => {
    if(n > 0){
        n--;
    } else {
        n = images.length - 1;
    }
    changeSlider();
});

nextBtn.addEventListener("click", () => {
    if(n < images.length - 1){
        n++;
    } else {
        n = images.length - 1;
    }
    changeSlider();
});

for (const item of scrollContainer) {
    item.addEventListener('wheel', (e) => {
        e.preventDefault();
        item.scrollLeft += e.deltaY;
    })
}