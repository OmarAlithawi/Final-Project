

// on scroll effect or waypoint jquery
// on scroll to sections direct
// sildeShow
// Animations / anime.js / glider.js / tweenMax
// Popup Video 
// responsive
//validations
//refactor


//our team on click popup
/*
let Popup = function (name , img){
  
}
*/
// create an object constructor and on click  popup with different info



//our team slider
new Glider(document.querySelector('.glider'), {
  slidesToShow: 1,
  draggable: true,
  dots: '#dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 775,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow:2,
        itemWidth: 150,
        duration: 0.25
      }
    },{
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        itemWidth: 150,
        duration: 0.25
      }
    }
  ]
});



//numbers countting
$(".num").counterUp({delay:10,time:1000});

