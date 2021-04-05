// Get the modal
var signUpModal = document.getElementById("signUpModal");

// Get the button to open the modal
var signUpBtn  = document.getElementById("signUpBtn");

// Get the button to close the modal
var closeSignUp = document.getElementById("closeSignUp");

signUpBtn.onclick = function() {
  signUpModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeSignUp.onclick = function() {
  signUpModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signUpModal) {
    signUpModal.style.display = "none";
  }
}
