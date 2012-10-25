'use strict';

describe('Directive: talk', function() {
  beforeEach(module('geekspeakApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<talk></talk>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the talk directive');
  }));
});
