var deletePostModal = document.getElementById("deletePostModal");
var deleteIcon = document.getElementById("delete1");
var cancelDelete = document.getElementById("cancelDelete");
var confirmDelete = document.getElementById("confirmDelete");

// Open the modal on click
deleteIcon.onclick = function() {
  deletePostModal.style.display = "block";
}

cancelDelete.onclick = function() {
  deletePostModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == deletePostModal) {
    deletePostModal.style.display = "none";
  }
}