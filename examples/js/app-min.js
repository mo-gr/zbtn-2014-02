/* global angular:false */(function(){"use strict";var e=angular.module("HelloWorldApp",[]);e.controller("GreetingController",function(e,t,n){e.greeting="Welcome";e.greet=function(r){e.greeting=t.greet(r);n.taunt(r).then(function(t){e.taunt=t.data.message})}});e.service("GreetingService",function(){return{greet:function(e){return e?"Hello, "+e:"State your name!"}}});e.service("TauntService",function(e){return{taunt:function(t){if(t)return e.get("http://foaas.com/linus/"+t+"/from",{responseType:"text/plain"})}}})})();