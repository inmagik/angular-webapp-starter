(function(){
"use strict";

angular.module('app.satellizerconfig', ['satellizer'])

.config(function ($authProvider) {
  /* configuring satellizer for working with django rest framework token auth */
  $authProvider.baseUrl = 'http:/localhost:8000';
  $authProvider.loginUrl = '/api-token-auth/';
  $authProvider.authToken = 'Token';
});

})();