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
// function password(){
//   var password = prompt("Please enter your password:");
//       while password.length <= 10
//         alert("Password must be over 10 characters. Please try again:")
//   console.log(password);
// }
// password();

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

var putMessageOnClick = function(){
  $(this).clone().appendTo(".main").after();
}


$(document).ready( function(){
  $(".main").click(
    putMessageOnClick
  ); 
});



