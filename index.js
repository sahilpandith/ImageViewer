import './style.css';
import images from './utilities.js'

const {imagesArray,onPrevNextClick,getCurrentImageIndex,setImage} = images();
 const root = document.querySelector('#image-gallery');
 const prev = document.createElement('div');
 prev.classList.add('prev');
 prev.textContent = "<";
 prev.addEventListener('click',function(){
    onPrevNextClick('prev');
    updateImage();
 })
 const next = document.createElement('div');
 next.classList.add('next');
 next.textContent = ">";
 next.addEventListener('click',function(){
    onPrevNextClick('next');
    updateImage();
 })
 const totalImagesdiv = document.createElement('div');
 totalImagesdiv.classList.add('total-images-count');
 imagesArray.forEach((img,index) => {
     if(index===0){
        totalImagesdiv.innerHTML+=`<span class="image-count-item active">o</span>`;
     }else{
        totalImagesdiv.innerHTML+=`<span class="image-count-item">o</span>`;
     }
     
 })

 function updateImage(){
    const current = getCurrentImageIndex();
    setImage(current);
    updateActiveCountNode(current);
 }
function updateActiveCountNode(current){
    const countContainer = document.querySelectorAll('.total-images-count span');
    countContainer.forEach(function(node) {
        node.classList.remove('active')
    })
    countContainer[current].classList.add('active')
}
 root.append(prev);
 root.append(totalImagesdiv);
 root.append(next);

 //set default image
 setImage(0);

 let autoPlay = false;
 let interval;
 const autoPlayButton = document.querySelector('.auto-play');
 autoPlayButton.addEventListener('click',autoPlayFunction);
 
 function autoPlayFunction(event){
    const button = this;
   if(!autoPlay){
       button.textContent = "Playing";
       interval = setInterval(function(){
           if(getCurrentImageIndex()===imagesArray.length-1){
               clearInterval(interval);
               autoPlay= ! autoPlay;
               button.textContent = "Play";
           }
           onPrevNextClick('next');
           updateImage();
       },1000)
   }else{
       clearInterval(interval);
       button.textContent = "Play";
   }
   autoPlay= !autoPlay;
}