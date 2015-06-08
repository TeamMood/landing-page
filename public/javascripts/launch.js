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

	var items = ["entreprise", "groupe", "équipe"],
		$text = $( '.alternate_fr' ),
		delay = 2; //seconds

	if ($( '.alternate_en' )) {
		items = ["company", "group", "team"];
		$text = $( '.alternate_en' );
	}

	function loop ( delay ) {
		$.each( items, function ( i, elm ){
			$text.delay(delay*1E3).fadeOut();
			$text.queue(function(){
				$text.html( items[i] );
				$text.dequeue();
			});
			$text.fadeIn();
			$text.queue(function(){
				if(i == items.length-1){
					loop(delay);
				}
				$text.dequeue();
			});
		});
	}

	loop(delay);
});