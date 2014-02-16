/* global angular:false */
(function () {
  'use strict';
  var helloWorldApp = angular.module('HelloWorldApp', []);

  helloWorldApp.controller('GreetingController', function($scope, GreetingService) {
    $scope.greeting = "Welcome";

    $scope.greet = function(name) {
      $scope.greeting = GreetingService.greet(name);
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
}());

