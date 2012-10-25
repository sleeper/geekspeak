'use strict';

geekspeakApp.controller('MainCtrl', function($scope) {

  $scope.activeTalks = [
  	{
  		title: "The fantastic history of Linux", 
  		presenter: "Torvalds",
  		proposed_by: "fred",
  		proposed_on: "2012-10-24 22:03:52",
  		comments: "This should be a fantastic history with a lot of bad w=mouth words ...",
  		votes: 10
  	},
  	{
  		title: "The fantastic history of vim",
  		presenter: "Who Knows ? ",
  		proposed_by: "julien",
  		proposed_on: "2012-09-22 14:03:52",
  		comments: "Well ... cryptic, mostly ;)",
  		votes: 15
  	},
  	{
  		title: "Is this the real thing ?", 
  		presenter: "Madonna", 
  		proposed_by: "pascal",
  		proposed_on: "2012-10-22 09:14:21",
  		comments: "Yes, lots of songs, dancing boys and girls, ...",
  		votes: 50
  	}
  ];

  $scope.isDisabled = false;
});
