(function(){

"use strict";

angular.module('app.networkconfig', ['restangular'])

.run(function(){})

.config(function(RestangularProvider, $httpProvider){

    /* CORS config. Affects all $http based services, included Restangular */
    /*
    $httpProvider.defaults.withCredentials = false;
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    */

    // Restangular configuration
    var baseServerUrl = '/chat/'//'http://192.168.1.81:8000/api/'//;
    RestangularProvider.setBaseUrl(baseServerUrl);
    /* Default config for Restangular */
    /*
    RestangularProvider.setDefaultHttpFields({
        'withCredentials': false
    });
    */
    
    /* Custom response extractor for Restangular  */
    /* This one plays well with djangorestframework */
    /*
    RestangularProvider.setResponseExtractor(function(response, operation, what, url) {
    var newResponse;
    if (operation === "getList") {
        newResponse = response.results != undefined ? response.results : response;
        newResponse.metadata = {
            count : response.count,
            next : response.next,
            previous : response.previous,
            number : response.number,
        }
    } else {
        newResponse = response;
    }
        return newResponse;
    });
    */
    
    /* Restangular requestSuffix, appended to all urls -- plays well with django */
    /*
    RestangularProvider.setRequestSuffix('/?');
    */
    
})

})();