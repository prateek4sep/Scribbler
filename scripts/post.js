var editButton = document.getElementById("editButton");
var saveButton = document.getElementById("saveButton");

var likeButton = document.getElementById("likeButton");
var likedButton = document.getElementById("likedButton");
var counterMessageNone = document.getElementById("counterMessageNone");
var counterMessageSingle = document.getElementById("counterMessageSingle");
var counterMessageMultiple = document.getElementById("counterMessageMultiple");
var count = document.getElementById("count");
var likes = 0;

var commentButton = document.getElementById("commentButton");newComment
var newComment = document.getElementById("newComment");
var commentsContainer = document.getElementById("commentsContainer");

function editablePost(){
  var postBody = document.getElementById('postBody');
  var postText = postBody.innerText;
  var postBodyEdit = document.getElementById('postBodyEdit');
  postBodyEdit.style.display = "block";
  postBody.style.display = "none";
  postBodyEdit.innerHTML = postText;
}

function updatedPost(){
  var postBody = document.getElementById('postBody');
  var postBodyEdit = document.getElementById('postBodyEdit');
  var editedText = postBodyEdit.value;
  postBodyEdit.style.display = "none";
  postBody.style.display = "block";
  postBody.innerHTML = "UPDATED:<br/>"+editedText;
}

function editableTitle(){
  var postTitle = document.getElementById('postTitle');
  var titleText = postTitle.innerText;
  var postTitleEdit = document.getElementById('postTitleEdit');
  postTitleEdit.style.display = "block";
  postTitle.style.display = "none";
  postTitleEdit.innerHTML = titleText;
}

function updatedTitle(){
  var postTitle = document.getElementById('postTitle');
  var postTitleEdit = document.getElementById('postTitleEdit');
  var editedText = postTitleEdit.value;
  postTitleEdit.style.display = "none";
  postTitle.style.display = "block";
  postTitle.innerHTML = "UPDATED: "+editedText;
}

editButton.onclick = function() {
  saveButton.style.display = "block";
  editButton.style.display = "none";
  editablePost();
  editableTitle();
}

saveButton.onclick = function() {
  saveButton.style.display = "none";
  editButton.style.display = "block";
  updatedPost();
  updatedTitle();
}

likeButton.onclick = function() {
  likeButton.style.display = "none";
  likedButton.style.display = "block";
  likes++;
  if(likes==1){
        counterMessageNone.style.display = "none";
        counterMessageMultiple.style.display = "none";
        counterMessageSingle.style.display = "block";
  }
  else{
        counterMessageNone.style.display = "none";
        counterMessageSingle.style.display = "none";
        count.innerHTML = likes;
        counterMessageMultiple.style.display = "block";
  }
}

// IMPORTANT: Functionality has been added on Liked button just to check the case of multiple likes.
// In real world clicking on 'Liked' would remove the like and different users liking would only be counted as multiple.
likedButton.onclick = function() {
  likedButton.style.display = "none";
  likeButton.style.display = "block";
  likes++;
  if(likes==1){
        counterMessageNone.style.display = "none";
        counterMessageMultiple.style.display = "none";
        counterMessageSingle.style.display = "block";
  }
  else{
        counterMessageNone.style.display = "none";
        counterMessageSingle.style.display = "none";
        count.innerHTML = likes;
        counterMessageMultiple.style.display = "block";
  }
}

commentButton.onclick = function() {
    var newCommentText = newComment.value;
    newComment.value = "";
    var newHTML = "<div class=\"comment\">"+ newCommentText +"</div>";
    if(newCommentText!=""){
        commentsContainer.innerHTML = newHTML + commentsContainer.innerHTML;
    }
}