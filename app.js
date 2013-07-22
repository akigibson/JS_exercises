// JS and jQuery Fundamentals & Recap
// http://learn.themakersquare.com/pages/javascript/recap
// ===============
// Exercise 3,4, 5

// function say_hello(){
//   alert("Hi");
//   var name = prompt("What is your name?");
//   console.log(name);
// }
// say_hello()


// Exercise 6
// function please_date_me(){
//   var movie = prompt("What movie would you like to see?");
//   var time = prompt("What time are you available?");
//   var response = prompt("Would you like to see " + movie + " with me at " + time + "?");
//   console.log(response);
// }
// please_date_me();

// Exercise 7
// function password_request(){
//   var password = prompt("Please enter your password:");
//   while (password.length <= 10)
//     {password = prompt("Password must be over 10 characters. Please try again:")}
//   console.log("You have successfully set your password to: " + password);
// }
// password_request();

// Exercise 8 ---Javascript uses different conditional syntax than Ruby
// function drink_test(){
//   var age = prompt("Welcome to Coder's Bar. How old are you?");
//   if (age >= 21)
//     {alert("Thank you. Please come in.")}
//   else if (age >= 18)
//   	{alert("Do you go to UT? Shouldn't you be studying?")}
//   else if (age <= 13)
//   	{alert("I know your mother kid. If you don't leave right now, I'm going to give her a call.")}
//   else 
//   	{alert("This is no place for high schoolers. You don't want to get mixed up with this crowd.")}
// }
// drink_test();

// Exercise 9
// function shopping(){
// 	var grocery_list = new Array();
// 	grocery_list[0] = "Milk";
// 	grocery_list[1] = "Cereal";
// 	grocery_list[2] = "Bread";
// 	grocery_list[3] = "Peanut Butter";
// 	grocery_list[4] = "Jelly";
// 	grocery_list[5] = "Soup";
// 	alert("Check the console for your shopping list for the day:")
// 	for (var item = 0;item<grocery_list.length;item++)
// 		{
// 		console.log("You need to get some " + grocery_list[item])
// 		}
// 	alert("That's all that is on your list for today. Enjoy your shopping experience.")
// }
// shopping();

// Exercise 10
// function personal_attributes(){
// 	var profile = new Array("Nick", 34, "married", "male", "Austin", "MakerSquare");
// 	alert(profile[0] + " is a " + profile[1] + " year old " + profile[2] + " " + profile[3] + " who currently lives in " + profile[4] + ", and attends " + profile[5] + ".")
// }
// personal_attributes();

// Exercise 11 - 12 // the program needs to use the function command (not "def" and "end") to run methods
// $(document).ready( function(){
// 	var my_name = prompt("Please enter your name:");
// 	var image_file = prompt("Please enter the url of your profile pic:");
// 	var age = prompt("Please enter your age:");
// 	var gender = prompt("Please enter your gender:");
// 	var job = prompt("Please enter your job:");	

// 	function create_header(my_name){
// 	    document.write("<h1>" + my_name + "</h1>");
// 	}

// 	function create_image(image_file){
// 	    document.write("<img src='" + image_file + "'/>");
// 	}

// 	function create_paragraph(age, gender, job){
// 	    document.write("<p>A " + age + " year old " + gender + " who currently works as a " + job + ".</p>");
// 	}
// 	function create_profile(name, age, gender, job, image_file){
// 	    create_header(name)
// 	    create_image(image_file)
// 	    create_paragraph(age, gender, job)
// 	    console.log(name + " is a " + age + " year old " + gender + " who currently works as as a " + job + ". Here is the url to his profile pic: " + image_file);
// 	}
// 	create_profile(my_name, age, gender, job, image_file);
// });
$(document).ready( function(){
// Exercise 13 - 16
// $("h1");
// $("div");
// $("div").first();
// $(".profilepic");
// $(".nav-items")
// $("#bottom-nav-item")
// $("*")
// $("p:first")
// $("[href]")
// $("#bottom-nav-item").children()
// $("#bottom-nav-item").parent()
// $("#bottom-nav-item").siblings()


// Exercise 17
// $(".right-sidebar").hide();

// Exercise 18
// $(".card").hide();

// Exercise 19
// $(".main").show();

// Exercise 20
// $(".main p").html("This is how we do it.");

// Exercise 21
// $(".main p").append("We are being schooled by our cool profs.");

// Exercise 22
// $(".main").append("<p>How you like me now is currently playing on the boombox.</p>");

// Exercise 23
// $(".right-sidebar").remove();

// Exercise 24

// Exercise 25

// Exercise 26

// Exercise 27

// Exercise 28

});
// Exercise 31 - Event Handling

// Notes
// $("h1:first");


// var setHeaderOnClick = function() {
//              $(this).find("h1").hide()
             // ---or you can use $("p", this)
            // }


// $(document).ready (
//     function (){
//         $(".main").click(
//             setHeaderOnClick
//         );
//     }
// );

// Exercise 35

// var putMessageOnClick = function(){
//   alert("Yo yo");
// }


// $(document).ready( function(){
//   $(".main h1").click(
//     putMessageOnClick
//   ); 
// });

// Exercise 36
// var putExclamationOnClick = function(){
//   $(this).append("!");
// }


// $(document).ready( function(){
//   $(".main p").click(
//     putExclamationOnClick
//   ); 
// });

// Exercise 37

// var changeBackgroundColorOnClick = function(){
//   $(this).css("background-color", "red");
// }


// $(document).ready( function(){
//   $("body").click(
//     changeBackgroundColorOnClick
//   ); 
// });

// Exercise 38

// var putMessageOnClick = function(){
//   $(this).clone().appendTo(".main").after();
// }


// $(document).ready( function(){
//   $(".main").click(
//     putMessageOnClick
//   ); 
// });



