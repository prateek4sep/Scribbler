var deletePostModal = document.getElementById("deletePostModal");
var cancelDelete = document.getElementById("cancelDelete");
var confirmDelete = document.getElementById("confirmDelete");

var deleteIcons = document.getElementsByClassName("delete");
var posts = document.getElementsByClassName("post");

var ellipsisIcons = document.getElementsByClassName("ellipsis");

var selectedPost = -1;

// Open the modal on click, Creating a temporary scope to preserve i's value.
for (var i = 0; i < posts.length; i++) (function(i){
    deleteIcons[i].onclick = function() {
        deletePostModal.style.display = "block";
        selectedPost = i;
    }
    ellipsisIcons[i].onclick = function() {
        location.href = "./post.html";
        selectedPost = i;
    }
})(i);

// When the user clicks NO on the modal, close it.
cancelDelete.onclick = function() {
  deletePostModal.style.display = "none";
}

// When the user clicks YES on the modal, delete the corresponding post.
confirmDelete.onclick = function() {
  posts[selectedPost].style.display = "none";
  deletePostModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it.
window.addEventListener('click', function(event) {
  if (event.target == deletePostModal) {
      deletePostModal.style.display = "none";
    }
});