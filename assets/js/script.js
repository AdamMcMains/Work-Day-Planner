// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
var timeID = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"];
var textBoxID = ["planInput-9","planInput-10","planInput-11","planInput-13","planInput-14","planInput-15","planInput-16","planInput-17"]
var saveButtonID = ["saveButton-9","saveButton-10","saveButton-11","saveButton-12","saveButton-13","saveButton-14","saveButton-15","saveButton-16"]
var IDNumb = [0,1,2,3,4,5,6,7,8];

function convertId(id){

  var match; 

  for(i = 0; i < 9;){

  if (timeID[i] === id){
    console.log("it matched!");
    match = IDNumb[i];

    break;

  }
  else if (textBoxID[i] === id){
    console.log("it matched!")
    match = IDNumb[i];

    break;

  }
  else if (saveButtonID[i] === id){
    console.log("it matched!")
    match = IDNumb[i];

    break;
  }
  else{

    i = i + 1;

  }

  }
  console.log(match, "is your number");
  return match;
}

function saveButtonParent(currentSaveButton){ 
  var select = currentSaveButton.target;
  var saveParent = select.parentElement;
  var buttonParent = saveParent.parentElement;

  return buttonParent.id;
  }

function textEntryParent(currentTextBox){
  var select = currentTextBox.target;
  var textParent = select.parentElement;

  return textParent.id;
}

function savePlan(parentID){
    var parent = document.getElementById(parentID);
    var idNumb = convertId(parentID);
    var child = (textBoxID[idNumb]);
    var childText = document.getElementById(child).value;
    console.log(child)
    console.log(childText);

    
}
  
  var currentTextBox = document.querySelectorAll("planInput");
  addEventListener("click", function(currentTextBox){
    textEntryParent(currentTextBox);
    console.log(textEntryParent(currentTextBox))
  });

  
  addEventListener("click", function(){
    //start up again here, make the timeID for the save plan function below based off which save button was pressed
    savePlan(timeID[0]);
    saveButtonParent(currentSaveButton);
    
    
    console.log(saveButtonParent(currentSaveButton));
  });

   
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });