$(document).ready(function(){

    $('#form_target').submit(function(e){
      alert("Handler for .submit() called.");
      e.preventDefault();
  
    });

    var wrapDebounce;

	wrapDebounce = function(fn) {
	  var dbFn;
	  return dbFn = _.debounce(fn, 350);
	};

	$('input[name="java_identifier"]').on('input', wrapDebounce(function(e) {
	  console.log(e.target.value);
	  if (e.target.value === '') {
	    return $(e.target).css('background-color', 'white');
	  } else if (Validator.isJavaIdentifier(e.target.value)) {
		return $(e.target).css('background-color', '#ABD8AB');
	  } else {
		return $(e.target).css('background-color', '#EAACAC');
	  }
	}));
	
	$('input[name="phone_number"]').on('input', wrapDebounce(function(e) {
	  console.log(e.target.value);
	  if (e.target.value === '') {
	    return $(e.target).css('background-color', 'white');
	  } else if (Validator.isPhone(e.target.value)) {
		return $(e.target).css('background-color', '#ABD8AB');
	  } else {
		return $(e.target).css('background-color', '#EAACAC');
	  }
	}));
    
    $('input[name="email"]').on('input', wrapDebounce(function(e) {
      console.log(e.target.value);
      if (e.target.value == '') {
        return $(e.target).css('background-color', 'white');
      } else if (Validator.isEmail(e.target.value)) {
        return $(e.target).css('background-color', '#ABD8AB');
      } else {
        return $(e.target).css('background-color', '#EAACAC');
      }
    }));
    
    $('input[name="date"]').on('input', wrapDebounce(function(e) {
	  console.log(e.target.value);
	  if (e.target.value === '') {
	    return $(e.target).css('background-color', 'white');
	  } else if (Validator.isDate(e.target.value)) {
		return $(e.target).css('background-color', '#ABD8AB');
	  } else {
		return $(e.target).css('background-color', '#EAACAC');
	  }
	}));
    
    $('input[name="e_id"]').on('input', wrapDebounce(function(e) {
	  console.log(e.target.value);
	  if (e.target.value === '') {
	    return $(e.target).css('background-color', 'white');
	  } else if (Validator.isEmail(e.target.value)) {
		return $(e.target).css('background-color', '#ABD8AB');
	  } else {
		return $(e.target).css('background-color', '#EAACAC');
	  }
	}));

});
	
	
	// Linked to an external JavaScript library called underscore which gives access to
	// a function called debounce.  This function listens to events that call it
	// and then executes an action when they cease. Used this utility library with JQuery 
	// to create a real time web interface that would provide instant feedback. 
	
	// Successfully implemented the regex for phone number,email, and date but am still 
	// actively working the regex expressions for Java Identifier, Eid, and User defined regex.
	
	// Sources:
	// Email Validator from code review website: <http://codereview.stackexchange.com/questions/65190/email-validation-using-javascript>
	// Date Validator from tutorial website: <http://www.regextester.com/6>