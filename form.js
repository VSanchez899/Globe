/*
Project 01_07_01

Globe Contact Form JS
Author: Morgan, Mikee, Harold, Vincent

filename: form.js

*/

"use strict";
/*------------------------------------------Global Variables--------------------------------------------------------*/
var formValidity = true;

/*------------------------------------------function userName--------------------------------------------------------*/
function inputElements() {
  //Variables
  var inputElements = document.getElementsByTagName("input");
  var errorDiv = document.getElementsByName("errorMessage");
  var fieldsetValidity = true;
  var elementCount = inputElements.length; //Will count the value
  var currentElement; //Will count the value inputed by the user


  //Try Clause
  try {
    console.log("inside try");

    for (var i = 0; i < inputElements.length; i++) {
        currentElement = inputElements[i];
        //Change the color of the box if the user has not inputed anything in - "" (Empty)
        if (currentElement.value === "") {
          console.log("inside if");
          currentElement.style.background = "rgb(255, 100, 100)";
          fieldsetValidity = false;
        } //End of if statement

        else {
          //Color will not change and will stay white if nothing is wrong
          console.log("inside else");
          currentElement.style.background = "white";
        } //End of else statement
      } //End of for statement


      //This sends the message about the wrong form input
      //If the throw statement the for loop then it will break the code because it loops
      //through the error message as well error message as well which disrputs the code
      if (fieldsetValidity === false) {
        console.log("inside the if message");
        throw "Please complete all the required fields."
      } //End of id statement
      else {
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
      } //End of else statement
  } //End of try clause


  catch(msg) {
    console.log(msg);
    errorDiv.innerHTML = msg;
    errorDiv.style.display = "block";
    formValidity = false;
  } //End of catch clause
} //End of function inputElements()

/*----------------------------------------function selectGender--------------------------------------------------------*/
function selectGender() {

} //End of function selectGender()



/*------------------------------------------function formType--------------------------------------------------------*/
function formType() {

} //End of function formType




/*------------------------------------------function messageBox--------------------------------------------------------*/
function messageBox() {

} //End of function messageBox()




/*-----------------------------------------function validateForm--------------------------------------------------------*/
function validateForm(evt) {
  console.log("inside validateForm");

  //Variables
  var form = document.getElementsByTagName("form")[0];
  var errorText = document.getElementById("errorText");


  if (evt.preventDefault) {
    evt.preventDefault();
  } else {
    evt.returnValue = false;
  }

  formValidity = true;

  // VALIDITY TESTS HERE ------ MPK - 9/20/17
  inputElements();
  formType();
  messageBox();


  //For a valid form
  if (formValidity === true) {
    document.getElementById("errorText").innerHTML = "";
    document.getElementById("errorText").style.display = "none";
    document.getElementsByTagName("form")[0].submit();
  } //End of if statement

  //For an invalid form
  else { //Displays error messageBox
    console.log(formValidity);
    document.getElementById("errorText").innerHTML = "Please fix the indicated problems and then resubmit your order.";
    document.getElementById("errorText").style.display = "block";
    //scroll(0, 0);
  } //End of else statement
} //End of function validateForm()


/*-------------------------------------function createEventListeners--------------------------------------------------------*/
function createEventListeners() {
  var form = document.getElementsByTagName("form")[0];
  if (form.addEventListener) {
    form.addEventListener('submit', validateForm, false);
  } //End of if statement
  //else if statement is for IE
  else if (form.attachEvent) {
    form.attachEvent('onsubmit', validateForm);
  } //End of else if statement
}



/*-----------------------------------------------Load Event------------------------------------------------------------*/
//Adding an event listener so it goes through the functions
//Will make sure the functions are working
// if statement is for chrome
if (window.addEventListener) {
  window.addEventListener('load', createEventListeners, false);
} //End of if statement
//else if statement is for IE
else if (window.attachEvent) {
  window.attachEvent('onload', createEventListeners);
} //End of else if statement
