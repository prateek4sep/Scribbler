// Get the modal
var createPostModal = document.getElementById("createPostModal");

// Get the button to open the respective modal
var createPostBtn  = document.getElementById("createPostBtn");

// Get the All Posts button
var allPostsBtn = document.getElementById("allPostsBtn");

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

// When the user clicks on 'x', close the modal
allPostsBtn.onclick = function() {
  location.href = "./html/postslist.html";
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
   if (event.target == createPostModal) {
         createPostModal.style.display = "none";
   }
});