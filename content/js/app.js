
    
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
    .when("/lab" ,{
        templateUrl:"../app/views/lab.html",
        controller:"LabCtrl"
    })
    .when("/contato" ,{
        templateUrl:"../app/views/contact.html",
        controller:"ContactCtrl"
    })
    .otherwise({redirect:"/"});
});





