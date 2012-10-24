'use strict';

geekspeakApp.controller('MainCtrl', function($scope) {

  $scope.activeTalks = [
  	{title: "The fantastic history of Linux", presenter: "Torvalds", votes: 10},
  	{title: "The fantastic history of vim", presenter: "Who Knows ? ", votes: 15},
  	{title: "Is this the real thing ?", presenter: "Madonna", votes: 50}
  ];

  $scope.increaseVotes = function(t) { t.votes += 1; }


});
