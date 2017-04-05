$(function(){


      function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
    
    
    




  //$('.slider').slick({

    // slidesToShow: 1,
    // slidesToScroll: 4,
    // autoplaySpeed: 2000,
    //autoplay: true,
    //autoplaySpeed: 3000,
  //});

//$("#premium").click(function() {
    //$('html, body').animate({
        //scrollTop: $("#scrollToPremium").offset().top
    //}, 1000);
//});

//$("#packages").click(function() {
    //$('html, body').animate({
        //scrollTop: $("#scrollToPackage").offset().top
    //}, 1000);
//});

//});
  
  //$('.your-class').slick({
   // setting-name: setting-value
  //});
