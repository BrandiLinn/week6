'use strict';

/* jasmine specs for controllers go here */

describe('PhoneCat controllers', function() {
 
  describe('PhoneListCtrl', function(){
  	var scope, ctrl;
 
    it('should create "phones" model with 3 phones', function() {
      var scope = {},
          ctrl = new PhoneListCtrl(scope);
 
      expect(scope.phones.length).toBe(3);
    });

    beforeEach(function() {
      scope = {},
      ctrl = new PhoneListCtrl(scope);
    });
 
 
    it('should create "phones" model with 3 phones', function() {
      expect(scope.phones.length).toBe(3);
    });
 
 
    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('age');
    });
    
  });
});
