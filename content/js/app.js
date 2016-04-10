
    
 var app =  angular.module('flapperNews', ["ngRoute"])

app.config(function($routeProvider){
    $routeProvider
    .when("/home" ,{
        templateUrl:"../app/views/main.html",
        controller:"MainCtrl"
    })
    .when("/sobre" ,{
        templateUrl:"../app/views/about.html",
        controller:"AboutCtrl"
    })
    .otherwise({redirect:"/home"});
});





