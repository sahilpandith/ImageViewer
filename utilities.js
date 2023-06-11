import TajMahalImg from './assets/Taj-Mahal.jpg'
import SV_TajMahal from './assets/SV_TajMahal.jpg'
import SV_MachuPicchu from './assets/SV_MachuPicchu.jpg'
import Redeemer from './assets/Redeemer.jpg'
import Redeemer_CU from './assets/Redeemer_CU.jpg'
import PetraNight from './assets/PetraNight.jpg'
import petra from './assets/petra.jpg'
import People_TajMahal from './assets/People_TajMahal.jpeg';
import GW_China from './assets/GW_China.jpg';
import GW_China_view from './assets/GW_China_view.jpg';
import Chichen_Night from './assets/Chichen_Night.jpg';



let currentImageIndex = 0;
function Images(){
    const root = document.querySelector('#image-gallery');
    const imageNode = document.createElement('img');
    imageNode.classList.add('image');
    root.append(imageNode);
    const imagesArray = [TajMahalImg,SV_MachuPicchu,SV_TajMahal,Redeemer,Redeemer_CU,petra,PetraNight,People_TajMahal,GW_China,GW_China_view,Chichen_Night];
    function onPrevNextClick(action){
        if(action==='prev'){
            if(currentImageIndex ===0) return;
            currentImageIndex--;
        }else if(action==='next'){
            if(currentImageIndex===imagesArray.length-1) return;
            currentImageIndex++
        }
    }
    function getCurrentImageIndex(){
        return currentImageIndex;
    }
    function setImage(index){
        imageNode.src=imagesArray[index];
    }
    return {
        imagesArray,onPrevNextClick,getCurrentImageIndex,setImage
    }
}
export default Images;