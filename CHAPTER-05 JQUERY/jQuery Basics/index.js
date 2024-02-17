// Manipulating Style with jQuery
$("h1").addClass("big-title margin-50");
$("h1").removeClass("margin-50");




// Manipulating Text with jQuery
$("h1").text("Bye");
$("button").html("<em>Don't Click Me</em>")




// Manipulating Attributes with jQuery
$("img").attr("src");
$("a").attr("href", "https://www.bing.com");




// Adding Event Listeners with jQuery
$("h1").click(function () {
    $("h1").css("color", "purple");
})


// By JS:
for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        document.querySelector("h1").style.color = "violet";
    })
}

// By jQuery:
$("button").click(function () {
    $("h1").css("color", "red");
});


// Modify the text of H1 tag by whatever the key is pressed: 
$(document).keypress(function (event) {
    $("h1").text(event.key);
});


// Modify the color of H1 tag on method:
$("h1").on("mouseover", function () {
    $("h1").css("color", "yellow");
});






// Adding and Removing Elements with jQuery
















// Website Animations with jQuery














