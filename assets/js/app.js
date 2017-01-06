
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

// portfolioApp.controller('SideBarController', function ($scope, $location,
//
// ));
