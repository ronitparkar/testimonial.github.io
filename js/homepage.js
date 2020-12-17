$(document).ready(function() {
var showChar = 100;
  var ellipsestext = "...";
  var moretext = "more";
  var lesstext = "less";
  $('.more').each(function() {
    var content = $(this).html();
    if(content.length > showChar) {
      var c = content.substr(0, showChar);
      var h = content.substr(showChar, content.length - showChar);

      var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

      $(this).html(html);
    }
  });
  $(".morelink").click(function(){
    if($(this).hasClass("less")) {
      $(this).removeClass("less");
      $(this).html(moretext);
    } else {
      $(this).addClass("less");
      $(this).html(lesstext);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
  });
 //display otp div
  $("#sendOtpbtn").click(function(e){
  	e.preventDefault();
     $("#otp").css("display", "block");			    
  });
  //hide signuppage1 modal and display signuppage2 modal;
  $("#verifytotpbtn").click(function(e){
  	e.preventDefault();
    $("#SignupModal").modal("hide");
	$("#SignupModal2").modal("show");		    
  });
  //hide signuppage1 modal and display login modal;
  $("#LoginModal").click(function(e){
  	e.preventDefault();
    $("#SignupModal").modal("hide");
	$("#LoginModal").modal("show");		    
  });

  // Custom method to validate username
  var form = $("#myform");
			$.validator.addMethod("usernameRegex", function(value, element) {
				return this.optional(element) || /^[a-zA-Z0-9]*$/i.test(value);
			}, "Username must contain only letters, numbers");
			//validate password
			$.validator.addMethod('strongPassword', function(value, element) {
			    return this.optional(element) 
			      || value.length >= 8
			      && /\d/.test(value)
			      && /[a-z]/i.test(value);
			  }, 'Your password must be at least 8 characters long and contain at least one number and one char\'.')
			//var form = $("#myform");
			$(".submit-btn").click(function(){
				var form = $("#myform");
				form.validate({
					errorElement: 'span',
					errorClass: 'help-block',
					highlight: function(element, errorClass, validClass) {
						$(element).closest('.form-group').addClass("has-error");
					},
					unhighlight: function(element, errorClass, validClass) {
						$(element).closest('.form-group').removeClass("has-error");
					},
					rules: {
						uname: {
							required: true,
							usernameRegex: true,
							minlength: 6,
						},
						pwd : {
							required: true,
							strongPassword:true,
							minlength: 8,
						},
						pwd : {
							required: true,
							equalTo: '#pwd',
						},
						
						fname: {
							required: true,
							minlength: 6,

						},
						lname: {
							required: true,
							minlength: 6,

						},
						email: {
							required: true,
							minlength: 3,
						},
						phno:{
							required: true,
							minlength: 10,
							maxlength:10,
						},
									
					},
					messages: {
						uname: {
							required: "Username required",
						},
						pwd : {
							required: "Password required",
						},
						cpwd : {
							required: "Password required",
							equalTo: "Password don't match",
						},
						fname: {
							required: "Name required",
						},
						lname: {
							required: "Name required",
						},
						email: {
							required: "Email required",
						},	
						phno:{
							required: "Phone no required",
						},
								
					}
				});
			});

			//validate name
			function nameValidate(event){
              console.log(event);
           if((event.charCode>=97&&event.charCode<=122)||(event.charCode>=65&&event.charCode<=90)){
              return true;
          }else{
              return false;
            }
          }

});//ready function end