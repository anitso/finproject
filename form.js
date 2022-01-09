let imagesslides = ["image/slider/სლაიდერი1.png", "image/slider/სლაიდერი2.png", "image/slider/სლაიდერი3.png"]
let n = 1;
let t = 5000;
function slaider(){
    let slide = document.querySelector(".slider img");
    slide.src = imagesslides[n];
  
    if(n < imagesslides.length - 1){
      n=n+1; 
    }
    else { 
      n = 0;
    }
