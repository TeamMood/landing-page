var launchPage = {
	url: 'submit.html',
	sent: false,
	formBgWidth: 120
}
$(document).ready( function() {
	$('#input-email').bind({
		focus: function(){
			$('#error').slideUp();
			if($(this).val() == 'your@email.com') {
				$(this).val('');
			}
		},
		blur: function() {
			if($(this).val() == '') {
				$(this).val('your@email.com');
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
			$('.fancy-form').animate({backgroundPositionX: launchPage.formBgWidth}, 2000, function() {
	    		 $(this).css('background-position-x', '0');
	  			}
	  		);
			// POST email address
			$.post(launchPage.url, { email: $('#email').val() },
				function(data) {
					if(data.match(/class='success'/)){
						$('#input-email').attr('disabled', true);
						$('#resp').html(data);
						$('#resp').animate({ opacity: 'toggle' }, 'slow');
						$('.hide-me').animate({ opacity: 0 }, 'slow');
						launchPage.sent = true;
					} else {
						$('#submit-email').attr('disabled', false);
						$('#error').html(data);
						$('#error').slideDown();
					}
			});				
		} else if(launchPage.sent == true) {
		
		} else {
			$('#submit-email').attr('disabled', false);
			$('#error').html('<p class="error">Please enter a valid email address.</p>');
			$('#error').slideDown();
		}
	});
});