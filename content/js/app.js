
    
 var app =  angular.module('flapperNews', ["ngRoute"])

app.config(function($routeProvider){
    $routeProvider
    .when("/" ,{
        templateUrl:"../app/views/main.html",
        controller:"MainCtrl"
    })
    .when("/sobre" ,{
        templateUrl:"../app/views/about.html",
        controller:"AboutCtrl"
    })
    .when("/skills" ,{
        templateUrl:"../app/views/skills.html",
        controller:"SkillsCtrl"
    })
    .otherwise({redirect:"/"});
});





