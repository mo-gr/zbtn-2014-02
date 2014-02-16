/* global angular:false */
(function () {
  'use strict';
  var helloWorldApp = angular.module('HelloWorldApp', []);

  helloWorldApp.controller('GreetingController', function($scope, GreetingService, TauntService) {
    $scope.greeting = "Welcome";

    $scope.greet = function(name) {
      $scope.greeting = GreetingService.greet(name);
      TauntService.taunt(name).then(function(response) {
        $scope.taunt = response.data.message;
      });
    };
  });

  helloWorldApp.service('GreetingService', function() {
    return {
      greet: function (name) {
        return !name ? "State your name!" 
                     : "Hello, " + name;
      }
    }
  });

  helloWorldApp.service('TauntService', function($http) {
    return {
      taunt: function (name) {
        if (name) {
          return $http.get('http://foaas.com/linus/' + name + '/from', {
            responseType: 'text/plain'
          });
        }
      }
    };
  });
}());

