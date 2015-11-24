(function(){
"use strict";

angular.module('app.permissions', ['permission'])

.run(function (Permission, $rootScope) {
  
  // Define anonymous role
  Permission.defineRole('anonymous', function (stateParams) {
    // If the returned value is *truthy* then the user has the role, otherwise they don't
    if (!$rootScope.user) {
      return true; // Is anonymous
    }
    return false;
  });

});

})();