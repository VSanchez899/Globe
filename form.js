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
  var errorDiv = document.getElementById("errorText");
  var fieldsetValidity = true;
  var elementCount = inputElements.length; //Will count the value
  var currentElement; //Will count the value inputed by the user


  //Try Clause
  try {

    for (var i = 0; i < inputElements.length; i++) {
        currentElement = inputElements[i];
        //Change the color of the box if the user has not inputed anything in - "" (Empty)
        if (currentElement.value === "") {
          currentElement.style.background = "rgb(255, 100, 100)";
          fieldsetValidity = false;
        } //End of if statement

        else {
          //Color will not change and will stay white if nothing is wrong
          currentElement.style.background = "white";
        } //End of else statement
      } //End of for statement


      //This sends the message about the wronf form input
      //If the throw statement the for loop then it will break the code because it loops
      //through the error message as well error message as well which disrputs the code
      if (fieldsetValidity === false) {
        throw "Please complete all the required fields."
      } //End of id statement
      else {
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
      } //End of else statement
  } //End of try clause


  catch(msg) {
    // console.log(msg);
    errorDiv.innerHTML = msg;
    errorDiv.style.display = "block";
    formValidity = false;
  } //End of catch clause
<<<<<<< Updated upstream
=======
<<<<<<< HEAD

=======
>>>>>>> origin/master
>>>>>>> Stashed changes
}
/*----------------------------------------function selectGender--------------------------------------------------------*/
function selectGender() {
// alert("selectGender()");

}
<<<<<<< Updated upstream
/*------------------------------------------function formType--------------------------------------------------------*/
function formType() {
  // alert("formType()");

=======
<<<<<<< HEAD

/*------------------------------------------function formType--------------------------------------------------------*/
function formType() {
  console.log("inside messagetype");
  var selectElements = document.getElementsByTagName("select");
  var errorDiv = document.getElementById("errorText");
  var fieldsetValidity = true;
  var elementCount = selectElements.length;
  var currentElement;

  try {
    for (var i = 0; i < selectElements.length; i++) {
        currentElement = selectElements[i];
        if (currentElement.value === "") {
          currentElement.style.outline = "rgb(255, 100, 100)";
          fieldsetValidity = false;
        }

        else {
          currentElement.style.outline = "white";
        }
      }

      if (fieldsetValidity === false) {
        throw "Please complete all the required fields."
      }
      else {
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
      }
  }

  catch(msg) {
    // console.log(msg);
=======
/*------------------------------------------function formType--------------------------------------------------------*/
function formType() {
  // alert("formType()");

>>>>>>> Stashed changes
}
/*------------------------------------------function messageBox--------------------------------------------------------*/
function messageBox() {
  // alert("messageBox()");
  var errorDiv = document.getElementById("errorText")
  var msgBox = document.getElementById("messageBox");
  var fieldsetValidity = true;

  try {
    if (document.getElementsByClassName("errorMesssage")) {
      msgBox.style.background = "rgb(255, 100, 100)";
      fieldsetValidity = false;
    } else {
      msgBox.style.background = "white";
    }
    if (fieldsetValidity === false) {
      // formValidity = false;
      throw "Please fill out message";
    } else {
      errorDiv.style.display = "none";
      errorDiv.innerHTML = "";
    }
  } catch (msg) {
    errorDiv.style.display = "block";
>>>>>>> origin/master
    errorDiv.innerHTML = msg;
    errorDiv.style.display = "block";
    formValidity = false;
  }
}
function removeSelectDefaults() { //This is for the type of form question
  console.log("selectedDefault");
  var emptyBoxes = document.getElementsByTagName("select");
  for (var i = 0; i < emptyBoxes.length; i++) {
    emptyBoxes[i].selectedIndex = -1;
  }
}
/*------------------------------------------function messageBox--------------------------------------------------------*/
function messageBox() {

<<<<<<< Updated upstream


/*-----------------------------------------function validateForm--------------------------------------------------------*/
function validateForm(evt) {

  // console.log("inside validateForm");
=======
}

/*-----------------------------------------function validateForm--------------------------------------------------------*/
function validateForm(evt) {
<<<<<<< HEAD
  // console.log("inside validateForm");
=======
>>>>>>> Stashed changes

  // console.log("inside validateForm");

>>>>>>> origin/master
  //Variables
  var form = document.getElementsByTagName("form")[0];
  var errorText = document.getElementById("errorText");


  if (evt.preventDefault) {
    evt.preventDefault();
  } else {
    evt.returnValue = false;
  }

  formValidity = true;

  // VALIDITY TESTS HERE
  inputElements();
  formType();
  selectGender();
  messageBox();
  removeSelectDefaults();


  //For a valid form
  if (formValidity === true) {

    document.getElementById("errorText").innerHTML = "";
    document.getElementById("errorText").style.display = "none";
    document.getElementsByTagName("form")[0].submit();
  } //End of if statement

  //For a invalid form
  else { //Displays error messageBox
<<<<<<< Updated upstream

    // console.log(formValidity);

=======
<<<<<<< HEAD
    console.log(formValidity);
=======

    // console.log(formValidity);

>>>>>>> origin/master
>>>>>>> Stashed changes

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
