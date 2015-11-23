(function(){
"use strict";

angular.module('ocio', ['app.networkconfig', 'app.statesconfig', 'http-auth-interceptor'])

.run(function($rootScope){

    //hook provided by http-auth-interceptor
    $rootScope.$on('event:auth-loginRequired', function(event, data){
        //normally redirect to login or open a login popup
    });

})


.config(function(){})



})();