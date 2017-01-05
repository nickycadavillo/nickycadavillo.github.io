
var portfolioApp = angular.module("portfolioApp", ['ngRoute'],
  function($routeProvider){
    $routeProvider.when('/home', {
      templateUrl: 'home.html'
    }),
    
    $routeProvider.when('/', {
      templateUrl: 'home.html'
    })



  }); //closes portfolioApp

// portfolioApp.run(function($rootScope, $location, $anchorScroll, $routeParams){
//   $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
//     $location.hash($routeParams.scrollTo);
//     console.log('click');
//     $anchorScroll();
//     console.log('click again');
//   });
// });
//
portfolioApp.controller('ScrollController', function($scope, $location, $anchorScroll, $routeParams){

});
