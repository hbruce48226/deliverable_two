//write a script that will inform the user what they should be wearing based on two conditions: 
/// /// /// the temperature and the event type
// this information will be gathered through prompts
// use the following table to drive the logic of your program

// event type                            clothing suggestion
// casual                                something comfy       
// semi-formal                           a polo
// formal                                a suit

// temperature                           clothing suggestion
// less than 54 degrees Fahrenheit       a coat
// 54-70 degrees Fahrenheit              a jacket
// more than 70 degrees Fahrenheit       no jacket

// declare and initialize the following variables
/// /// /// eventType: will contain the information entered in the prompt for                        the event type
/// /// /// tempFahr: will contain the information entered in the prompt for                         the temperature in Fahrenheit
/// /// /// result: a string that will be logged to the console

// use conditional statements to drive the decision making of your program
// initializes result as a single string using concatenation...this string        will contain the event type, temperature, and clothing suggestion 
/// /// /// ie.: "Since it is 33 degrees and you are going to a formal event,                   you should wear a suit and coat."
// logs the 'result' variable to the console

//////////////////////////////////////////////////////////////////////////////

// initialize the variables
var greeting_eventType = "What event are you going to?";
var greeting_tempFahr = "What is the temperature today?";
var init_result = ""; // change this variable, since it is passed to 'result'
// must contain the event type, temperature, and clothing suggestion

// prompt box filler
var filler_eventType = "casual, semi-formal, formal";
var filler_tempFahr = "type only the number"

// declare the variables
var eventType = prompt(greeting_eventType, filler_eventType);
var tempFahr = prompt(greeting_tempFahr, filler_tempFahr);
var result = "";



// logic for clothing suggestion based on Event response
// event type                            clothing suggestion
// casual                                something comfy       
// semi-formal                           a polo
// formal                                a suit
clothingEvent = "";
if (eventType==="casual") {
    clothingEvent = "something comfy";
} else if (eventType==="semi-formal") {
    clothingEvent = "a polo";
} else if (eventType==="formal") {
    clothingEvent = "a suit";
}
//console.log(clothingEvent);


// logic for clothing suggestion based on Temperature response
clothingTemp = "";
if (tempFahr < 54) {
    clothingTemp = "a coat";
} else if ((tempFahr >= 54) && (tempFahr <= 70)) {
    clothingTemp = "a jacket";
} else {
    clothingTemp = "no jacket";
}
//console.log(clothingTemp);




// logic for creating the recommendation sentence
// temperature
result += "Since it is " + tempFahr + " degrees";
// event
result += " and you are going to a " + eventType + " event, ";
// clothing suggestion
result += "you should wear " + clothingEvent + " and " + clothingTemp + ".";




console.log(result);
