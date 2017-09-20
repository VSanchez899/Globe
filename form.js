/*
Project 01_07_01

Globe Contact Form JS
Author: Morgan, Mikee, Harold, Vincent

filename: form.js

*/

/* Capstone Project - Globe
 * Names: Vincent Nguyen, Morgan Kennedy, Harold Bermudez, Mikee Agpawan
 * Date: 9/19/17
 * Filename: form.js */

"use strict";
/*------------------------------------------Global Variables--------------------------------------------------------*/
formValidity = true;

/*------------------------------------------function userName--------------------------------------------------------*/
function inputElements(){



/*----------------------------------------function selectGender--------------------------------------------------------*/
function selectGender() {

}

/*------------------------------------------function formType--------------------------------------------------------*/
function formType() {

}

/*------------------------------------------function messageBox--------------------------------------------------------*/
function messageBox() {
  var inputElements = document.getElementsByTagName("input");
  var errorDiv = document.getElementById("errorText");
  var fieldsetValidity = true;
  var elementCount = inputElements.length; //Will count the value
  var currentElement; //Will count the value inputed by the user

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


      if (fieldsetValidity === false) {
        throw "Please complete all the required fields."
      } //End of id statement
      else {
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
      } //End of else statement
  } //End of try clause
}


/*-----------------------------------------function validateForm--------------------------------------------------------*/
function validateForm(evt) {
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
