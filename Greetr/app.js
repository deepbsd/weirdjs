// create a new instance with a fictional user
var g = G$('John', 'Doe');

//g.greet().setLang('en').greet(true).log(true);

let langChoice = $("#lang").val();
let formalChoice = $("#formal").val();

console.log("Lang: ", langChoice, "Formality: ",formalChoice);

// monitors changes to language selection.
$("#lang").change(function(){
    langChoice = $("#lang").val();
    console.log("Language change detected: ", langChoice);
    g.setLang(langChoice);
});


$("#login").click(function(){

    //$("#logindiv").hide();  // I could hide the div, but then
    // I couldn't change lang on the fly...

    // I also added change formality functionality
    
    // Need to watchout for changes in formality
    formalChoice = $("#formal").val();

    // formalChoice will not be a Boolean at this time
    // cannot call HTMLGreeting with string parameter, must be Boolean
    if (formalChoice === 'true'){

        g.HTMLGreeting("#greeting", true).log();

    } else {

        g.HTMLGreeting("#greeting", false).log();

    }

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

