/* global angular:false */
(function () {
  'use strict';
  var helloWorldApp = angular.module('HelloWorldApp', []);

  helloWorldApp.controller('GreetingController', function($scope) {
    $scope.greeting = "Welcome";

    $scope.greet = function(name) {
      $scope.greeting = "Hello, " + name;
    };
  });
}());

