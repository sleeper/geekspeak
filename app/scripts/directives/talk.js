'use strict';

// A talk has several attributes:
// * title
// * presenter
// * creation date
// * created by
// * votes
// * comments
// * presentation date
//
geekspeakApp.directive('talk', function() {
  return {
    templateUrl: 'views/talk.html',
    restrict: 'E',
    scope: {
    	talk: '=talk',
    	increment: '&'
    }
  };
});
