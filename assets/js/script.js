// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
var timeID = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"];
var textBoxID = ["planInput-9","planInput-10","planInput-11","planInput-12","planInput-13","planInput-14","planInput-15","planInput-16","planInput-17"]
var saveButtonID = ["saveButton-9","saveButton-10","saveButton-11","saveButton-12","saveButton-13","saveButton-14","saveButton-15","saveButton-16"]
var IDNumb = [0,1,2,3,4,5,6,7,8];
var timeNumb = [9,10,11,12,13,14,15,16,17]
var savedText = [];

const date = new Date();
const hour = date.getHours();
const min = date.getMinutes();

function convertId(id){
  var match; 
  
  for(i = 0; i < 10;){

  if (timeID[i] == id){
    console.log("it matched!");
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
    var idNumb = convertId(parentID);
    var child = (textBoxID[idNumb]);
    var childText = document.getElementById(child).value;
    localStorage.setItem(parentID, childText);
    
    console.log(childText, "was saved successfully");  
}



var currentTextBox = document.querySelector(textBoxID)
  addEventListener("click", function(currentTextBox){
    var parentTime = textEntryParent(currentTextBox);
    console.log(parentTime);
  });

var currentSaveButton = document.getElementById(saveButtonID);
  currentSaveButton = addEventListener("click", function(currentSaveButton){
    var parentTime = saveButtonParent(currentSaveButton);
    savePlan(parentTime);

    console.log("the current save button being pressed belongs to parent", parentTime);
  });

  var currentHour = hour;
  for (i = 0; i < 10; i++){
    var currentHourID = convertId(timeID[i])
    var parentHour = (timeNumb[currentHourID])

    if (parentHour == hour){
      document.getElementById(timeID[i]).setAttribute("class", "row time-block present")
    }
    else if (parentHour < hour){
      document.getElementById(timeID[i]).setAttribute("class", "row time-block past")
    }
    else if (parentHour > hour){
      document.getElementById(timeID[i]).setAttribute("class", "row time-block future")
    }
  }
    
  for (i = 0; i < 10; i++){
    var loadText = localStorage.getItem(timeID[i]);
    var childID = (textBoxID[i])
    var childTextBox = document.getElementById(childID);
    var childText = document.createTextNode(loadText);
    childTextBox.appendChild(childText);
  }
   
    var printDate = date;
    y = document.getElementById("currentDay");
    x = document.createTextNode(date);
    y.appendChild(x);
  });