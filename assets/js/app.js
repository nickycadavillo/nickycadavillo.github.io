
var portfolioApp = angular.module("portfolioApp", ['ngRoute'],
  function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'home.html'
    })
  }); //closes portfolioApp
