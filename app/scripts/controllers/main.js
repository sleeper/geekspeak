'use strict';

geekspeakApp.controller('MainCtrl', function($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Testacular'
  ];
  
  $scope.activeTalks = [
  	{title: "The fantastic history of Linux", presenter: "Torvalds"},
  	{title: "Is this the real thing ?", presenter: "Madonna"}
  ];
});
