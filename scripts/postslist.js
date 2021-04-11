// Controls for Delete Post modal
var deletePostModal = document.getElementById("deletePostModal");
var cancelDelete = document.getElementById("cancelDelete");
var confirmDelete = document.getElementById("confirmDelete");

// On Card Controls for Posts: Delete and Redirection to corresponding post page
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
        var author = posts[i].querySelector(".name > p").innerHTML;
        var postTitle = posts[i].querySelector(".title").innerHTML;
        var postBody = posts[i].querySelector(".wrap").innerHTML;
        console.log(author);
        console.log("author");
        if(author.length>0) {
            sessionStorage.setItem("author",author);
            sessionStorage.setItem("postTitle",postTitle);
            sessionStorage.setItem("postBody",postBody);
         }
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