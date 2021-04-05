// Get the modals
var signUpModal = document.getElementById("signUpModal");
var signInModal = document.getElementById("signInModal");
var createPostModal = document.getElementById("createPostModal");

// Get the buttons/link to open the respective modals
var signUpBtn  = document.getElementById("signUpBtn");
var signInBtn  = document.getElementById("signInBtn");
var signUpLink  = document.getElementById("signUpLink");

// Get the buttons to close the respective modals
var closeSignUp = document.getElementById("closeSignUp");
var closeSignIn = document.getElementById("closeSignIn");

// Open the respective modals on click
signUpBtn.onclick = function() {
  signUpModal.style.display = "block";
}

signInBtn.onclick = function() {
  signInModal.style.display = "block";
}

signUpLink.onclick = function() {
  signInModal.style.display = "none";
  signUpModal.style.display = "block";
}

// When the user clicks on 'x', close the modal
closeSignUp.onclick = function() {
  signUpModal.style.display = "none";
}

closeSignIn.onclick = function() {
  signInModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signUpModal) {
    signUpModal.style.display = "none";
  }
  if (event.target == signInModal) {
      signInModal.style.display = "none";
   }
   if (event.target == createPostModal) {
         createPostModal.style.display = "none";
   }
}

