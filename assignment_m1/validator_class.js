(function(window){
    'use strict';
    function define_validator(){
        var Validator = {};
        
        Validator.isJavaIdentifier = function(email){
          if (email.match(/^\S*$/) !== null) {
            return true;
          } else {
            return false;
          }
        }
        
        Validator.isPhone = function(phone){
          if (phone.match(/^[2-9]{3}-[0-9]{3}-[0-9]{4}$|^[2-9]{7}$|^\([2-9]{3}\)-[0-9]{3}-[0-9]{4}$/) !== null) {
            return true;
          } else {
            return false;
          }
        }
        
        Validator.isEmail = function(email){
          if (email.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/) !== null) {
            return true;
          } else {
            return false;
          }
        }
        
        Validator.isDate = function(date){
          if (date.match(/^((0?[13578]|10|12)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[01]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1}))|(0?[2469]|11)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[0]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1})))$/) !== null) {
            return true;
          } else {
            return false;
          }
        }
    // If the user types in a proper input value the background color changes to green. 
    // Incorrect input values changes the
	// background color to red.  Empty input boxes remain white.  Values are checked using
	// the JavaScript match function with the proper regular expression string value.
        
        return Validator;
    }
    
    //define globally if it doesn't already exist
    if(typeof(Validator) === 'undefined'){
        window.Validator = define_validator();
    }
    else{
        console.log("Validator already defined.");
    }
    
})(window);
