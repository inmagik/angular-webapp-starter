(function(){

"use strict";

angular.module('app.statesconfig', ['ui.router'])

.config(function(){})

.run(function($stateProvider, $urlRouterProvider){

    /* States config */

    $stateProvider
    .state('app', {
        url: '/app',
        abstract: true,
        template : '<ui-view></ui-view>',
        controller : 'AppCtrl'
    })
    .state('app.login', {
        url: '/login',
        //templateUrl: 'templates/login.html',
        //controller: 'LoginCtrl',
        resolve: {
          
        }
    })
    .state('app.account', {
        url: '/account',
        templateUrl: 'templates/account.html',
        //controller: 'AccountCtrl',
        resolve: {
          
        }
    })
    .state('app.home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: function($scope){
            
        },
        resolve: {
          
        }
    })

    $urlRouterProvider.otherwise(function ($injector) {
        var $state = $injector.get('$state');
        $state.go('app.home');
    });

})

})();