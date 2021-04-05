// Get the modals
var signUpModal = document.getElementById("signUpModal");
var signInModal = document.getElementById("signInModal");

// Get the buttons to open the respective modals
var signUpBtn  = document.getElementById("signUpBtn");
var signInBtn  = document.getElementById("signInBtn");

// Get the buttons to close the respective modals
var closeSignUp = document.getElementById("closeSignUp");

// Open the respective modals on click
signUpBtn.onclick = function() {
  signUpModal.style.display = "block";
}

signInBtn.onclick = function() {
  signInModal.style.display = "block";
}

// When the user clicks on 'x', close the modal
closeSignUp.onclick = function() {
  signUpModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signUpModal) {
    signUpModal.style.display = "none";
  }
}
