// long running function
function waitThreeSeconds() {
    // This function takes longer than 3 seconds!!!
    // This takes more like 15 seconds to execute.
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){
        // I wanted to log each loop...
        console.log("ms: ", ms);
    }
    console.log('finished function');
}

function setATimeOut() {
    // This delay needs to be long enough to notice that after
    // waiting for 'waitThreeSeconds()' to finish, this function
    // then starts.  It doesn't run along side of waitThreeSeconds().
    console.log("Starting setATimeOut()...");
    var msDelay = 15000;
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
// it turns out that this executes immediately, because the "waitThreeSeconds()" function takes nearly 
// a full minute.  I guess this executes during that time?
setATimeOut();

console.log('finished execution');
