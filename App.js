//Creating Image slider to change the hero Image after every three seconds
var slideIndex=0; // This variable is declear to keep track of the current slide that is displayed
showImg();
function showImg(){
 //Getting all of the images and looping through them to set their display to none
 var images=$(".background_image");
 var circle=$(".dot");
 let i;
  for(i = 0; i < images.length; i++){
  
    images[i].style.display="none";    
 
  }

  slideIndex++;
  if (slideIndex > images.length){slideIndex=1}
 
  images[slideIndex - 1].style.display="block";
 

  // looping through the dotted to display inline with the image
  for (i = 0; i < circle.length; i++){
    circle[i].className = circle[i].className.replace(" active", "");
  }
 circle[slideIndex-1].className += " active";
  setTimeout(showImg, 3000);
}