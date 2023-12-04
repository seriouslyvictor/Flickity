// var elem = document.querySelector('.main-carousel');
// var flkty = new Flickity( elem, {
//   // options
//   cellAlign: 'left',
//   contain: true
// });

// // element argument can be a selector string
// //   for an individual element
// var flkty = new Flickity( '.main-carousel', {
//   // options
// });

const elCarosel = document.querySelector(".container--carosel");
const elCarosel2 = document.querySelector(".container--cards");

const flickerMain = new Flickity (elCarosel, {
    autoPlay: true,
    groupCells: false,
    wrapAround: true

})

const flickerCards = new Flickity (elCarosel2, {
    cellAlign: "left",
    autoPlay: false,
    groupCells: true,
    wrapAround: false,
    contain: true,
    selectedAttaction: 0.01,
    friction: 0.12

})
