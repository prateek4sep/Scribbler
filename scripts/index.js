// Get the modal
var createPostModal = document.getElementById("createPostModal");

// Get the button to open the respective modal
var createPostBtn  = document.getElementById("createPostBtn");

// Get the buttons to close the respective modals
var closeCreatePost = document.getElementById("closeCreatePost");

// Open the modal on click
createPostBtn.onclick = function() {
  createPostModal.style.display = "block";
}

// When the user clicks on 'x', close the modal
closeCreatePost.onclick = function() {
  createPostModal.style.display = "none";
}

