'use strict';

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
