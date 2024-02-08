//Creating a function that toggle the handburger menu 
showNavDropDown();

function showNavDropDown(){
    
$(".fa-bars").on("click", function(){
  //Displaying the handburger drop down
    $(this).toggleClass("fa-x");
    $(".handBurger_menu_dropdown").toggleClass("show_hand_burger");
});
//Displaying the FLIGHT AND TERMINAL INFORMATION DROP DOWN
$(".flight_btn").on("click", function(){
  $(".flight_drop_down2").toggleClass("show_flag_cont");
});

$(".ter_info_btn").on("click", function(){
  $(".terminal_info2").toggleClass("show_ter_info");
});


}


//Creating a callback function to display the find your flight options and also rotate the angle down
var angleDown=$(".fa-angle-down"); 
var chooseFlightDropDown=$(".find_ur_flight_drop_down");
var degree=180;
var greede=0;

angleDown.on("click", function(){
    chooseFlightDropDown.toggleClass("show");
    $(this).toggleClass("rotate_angle");
     


});



//Creating Image slider to change the hero Image  after every three seconds
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
  setTimeout(showImg, 5000);
}


// trying Scroll behavior

window.onscroll= function(){scrollFunction()}; // when a scroll gets detected on the window it should look for where the scrollFunction() was created and run it
 
function scrollFunction(){
  if (document.documentElement.scrollTop > 50 ){
    $("header").addClass("hide");
  }
  else{$("header").removeClass("hide");}
}