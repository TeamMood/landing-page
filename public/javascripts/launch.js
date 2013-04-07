var launchPage = {
	sent: false,
	formBgWidth: 120
}
$(document).ready( function() {
	$('#input-email').bind({
		focus: function(){
			$('#error').slideUp();
			if($(this).val() == 'your@email.com' || $(this).val() == 'votre@email.com') {
				$(this).val('');
			}
		}
	});
	
	$('#submit-email').click( function(e) {
		e.preventDefault();
		$('#error').slideUp();
		$('#resp').html('');
		$('#submit-email').attr('disabled', true);
		if($('#input-email').val().match(/^\S+@\S+\.\S+$/) && launchPage.sent !== true && $('#input-email').val() != 'your@email.com' ) {
			// Animate background
			$('.fancy-form').animate({"background-position": launchPage.formBgWidth}, 1500, function() {
	    		 $(this).css('background-position-x', '0');
	    		// POST email address
	 			$('.fancy-form').submit();
	  			}
	  		);
			
		} else if(launchPage.sent == true) {
		
		} else {
			$('#submit-email').attr('disabled', false);
			$('#error').html('<p class="error">Please enter a valid email address.</p>');
			$('#error').slideDown();
		}
	});
});