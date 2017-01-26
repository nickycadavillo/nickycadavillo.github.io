

portfolioApp.controller('ScrollController', function($scope, $location, $anchorScroll, $routeParams){

});


/* responsive nav hamburger menu */


    $(".nav-bar").addClass("hamburger").before('<i id = "burger-icon" class="fa fa-bars fa-2x" aria-hidden="true"></i>');
      $("#burger-icon").click(function(){
          $(".nav-bar").toggle();
      });

      // $("#chat-project-two").before($("#chat-project-one"));
