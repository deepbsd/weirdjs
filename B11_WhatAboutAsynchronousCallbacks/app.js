// long running function
function waitThreeSeconds() {
    // This function takes longer than 3 seconds!!!
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){
        // I wanted to log each loop...
        console.log("ms: ", ms);
    }
    console.log('finished function');
}

function setATimeOut() {
    console.log("Starting setATimeOut()...");
    var msDelay = 3000;
    setTimeout(function() {
        console.log("Executed inside SetATimeOut() in ms: ", msDelay);
        console.log("Completed setATimeOut().");
    },msDelay);
}


function clickHandler() {
    console.log('click event!');   
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
// added this call--want to see if both types of function execute for similar durations...
setATimeOut();
console.log('finished execution');
