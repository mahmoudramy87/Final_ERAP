// Start of Code Belonging to the Index HTML Page
$("#goin").click(function() {
	window.location.replace("signin.html");
});

$("#goup").click(function() {
	window.location.replace("signup.html");
});

// End of Code Belonging to the Index HTML Page

// Code Belongs to the SignUp HTML Page
$("#sign").click(function(){
	var fnup = $("#firstnameup").val();
	var lnup = $("#lastnameup").val();
	var eup = $("#emailup").val();
	var pup = $("#passwordup").val();
	
	
	$.get( "http://10.0.3.2/ProjectServer/signup.php", { firstnameup : fnup, lastnameup : lnup, emailup : eup, passwordup : pup } )
		.done(function( data ) {
			var returnValue = data;
			
			if( returnValue.match("success") )
			{
				window.location.replace("signin.html");
			}
			else
			{
				alert("Database Error");
			}
		});	
});

$("#clr").click(function() {

	$("#firstnameup").val("");
	$("#lastnameup").val("");
	$("#emailup").val("");
	$("#passwordup").val("");

});

$("#back").click(function() {
	window.location.replace("index.html");
});

// End of Code Belonging to SignUp HTML Page

//-------------------------------------------//

// Code Belongs to the SignIn HTML Page

$("#goback").click(function() {
	window.location.replace("index.html");
});

$("#signin").click(function() {

var email = $("#email_inup").val();
var password = $("#password_inup").val();

$.get( "http://10.0.3.2/ProjectServer/signin.php", { email_inup : email, password_inup : password } )
		.done(function( data ) {
			var returnValue = data;
			
			if( returnValue.match("success") )
			{
				window.location.replace("currentlocation.html");
			}
			else
			{
				alert("Invalid Username or Password");
			}
		});	

});

// End of Code Belonging to SignIn HTML Page

// Start of Code Belonging to Current Location HTML Page

$("#proceedToRouting").click(function() {
	window.location.replace("routing.html");
});

$("#feedback").click(function() {
	window.location.replace("feedback.html");
});

// End of Code Belonging to Current Location HTML Page

// Start of Code Belonging to Feedback HTML Page

$("#submitFeedback").click(function() {
	alert("Feedback Submitted");
});

$("#rst").click(function() {
	$("#textarea").val("");
});

$("#backToRouting").click(function() {
	window.location.replace("currentlocation.html");
});

// End of Code Belonging to Feedback HTML Page





