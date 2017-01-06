
var portfolioApp = angular.module("portfolioApp", ['ngRoute'],
  function($routeProvider){
    $routeProvider.when('/home', {
      templateUrl: 'home.html'
    }),

    $routeProvider.when('/', {
      templateUrl: 'home.html'
    })



  }); //closes portfolioApp


portfolioApp.controller('ScrollController', function($scope, $location, $anchorScroll, $routeParams){


});


portfolioApp.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  //when the route is changed scroll to the proper element.
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();
  });
});
