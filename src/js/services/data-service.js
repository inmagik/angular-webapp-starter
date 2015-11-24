(function(){
"use strict";

angular.module("app")
.factory('DataService', DataService);

function DataService(Restangular){
    var svc = {};
    // Example restangular service. See also modules/config/network-config
    // for global restangular config.
    // Can do things like svc.something.one(id).get() or svc.something.getList()
    // and get back restangularized objects.
    
    /*
    svc.something = Restangular.service("something");
    */

    return svc;
}


})();