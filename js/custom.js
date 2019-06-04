/*$  (function(){
	$ ('#btn1').on('click',function(){
		$('#main-nav').css('transition:);
	});
});*/

/*$("#btn1").click(function () {
   //1 second of animation time
   //html works for FFX but not Chrome
   //body works for Chrome but not FFX
   //This strange selector seems to work universally
   $("html, body").animate({scrollTop: 0}, 1000);
});*/





$(function(){
	$('#readmore').hide();
})
$(function(){
	$('#btn3').on('click',function(){
		if($('#readmore').css('display') == 'block'){
			$('#readmore').hide();
			$('#btn3').html('Read More');
			
			//$('#paraDiv').hide();
		}
		else{
			$('#readmore').show();	
			/*$('#paraDiv').show();*/
			//$('#btn3').remove();
			$('#btn3').html('Read Less');

		}
	});
	
});
/*var formData = {};
	$( "form" ).submit(function( event ) {
		formData = $( this ).serializeArray();

		event.preventDefault();
	});
$(function(){
	$('#submit').click(function(){
		var firstname = $("#firstname").val();
		var lastname = $("#lastname").val();
		var email = $("#email").val();
		var password = $("#password").val();
		console.log(firstname);
		console.log(lastname);
		console.log(email);
		console.log(password);	
		
	});
});*/










