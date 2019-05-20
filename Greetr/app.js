// create a new instance with a fictional user
var g = G$('John', 'Doe');

//g.greet().setLang('en').greet(true).log(true);

let langChoice = $("#lang").val();

console.log("Lang: ", langChoice);

// monitors changes to language selection.
$("#lang").change(function(){
    langChoice = $("#lang").val();
    console.log("Language change detected: ", langChoice);
    g.setLang(langChoice);
});

$("#login").click(function(){

    //$("#logindiv").hide();  // I could hide the div, but then
    // I couldn't change lang on the fly...
    g.HTMLGreeting("#greeting", true).log();
});


// Course author approached problem differently.  He 
// made the option selector disappear after each login click.
// I wanted to preserve the opportunity to change languages 
// even after login, so I let the #logindiv remain and continue
// to monitor changes to the language selector.
//
// Here was the author's solution:

/*

    $("#login").click(function(){
        var loginGrtr = G$("John", "Doe");

        $("#logindiv").hide();

        loginGrtr.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();

    });

*/

