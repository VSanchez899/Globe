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

}
/*----------------------------------------function selectGender--------------------------------------------------------*/
function selectGender() {

}

/*------------------------------------------function formType--------------------------------------------------------*/
function formType() {
  // var errorDiv = document.getElementById("errorText");
  // var fieldsetValidity = true;
  // var elementCount = inputElements.length;
  // var currentElement;

}

/*------------------------------------------function messageBox--------------------------------------------------------*/
function messageBox() {

}


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

//For a invalid form
else { //Displays error messageBox
  console.log(formValidity);

  document.getElementById("errorText").innerHTML = "Please fix the indicated problems and then resubmit your order.";
  document.getElementById("errorText").style.display = "block";
  //scroll(0, 0);
} //End of else statement
}


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
//Adding an event listener so it goes to the function
//Will make sure the functions are working
// if statement is for chrome
if (window.addEventListener) {
  window.addEventListener('load', createEventListeners, false);
} //End of if statement
//else if statement is for IE
else if (window.attachEvent) {
  window.attachEvent('onload', createEventListeners);
} //End of else if statement
