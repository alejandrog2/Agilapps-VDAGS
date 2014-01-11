$(document).ready(function(){
    	$('.error').hide();
	$('.submit').click(function(event){
        
        //.val jquery .value javascript
		var data = $('.infobox').val();
		if(validate_userid(data)){
			$('.error').hide();
		} else {
			$('.error').show();
			event.preventDefault();
		}
	});
});

function validate_userid(uid){
    
    //Regular expresion
	var pattern = new RegExp(/[a-z0-9_]+$/);

	return pattern.test(uid);
}

