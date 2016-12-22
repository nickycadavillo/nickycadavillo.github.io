
var portfolioApp = angular.module("portfolioApp", ['ngRoute'],
  function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'home.html'
    })


  }); //closes portfolioApp

portfolioApp.run(function($rootScope, $location, $anchorScroll, $routeParams){
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    console.log('click');
    $anchorScroll();
    console.log('click again');
  });
});

portfolioApp.controller('ScrollController', function($scope, $location, $anchorScroll, $routeParams){

});

// portfolioApp.controller('ScrollController', function($scope, $location, $anchorScroll, $routeParams){
//
// });

// app.run('anchorScroll', [])
//     .controller('ScrollController', ['$scope', '$location', '$anchorScroll',
//     function($scope, $location, $anchorScroll){
//       $scope.gotoAboutMe = function(){
//         //sets up the location to go to the id which is the about me location
//         $location.hash(id);
//         console.log($location.hash());
//         // call on $anchorScroll
//         $anchorScroll();
//       };
//     }]);
