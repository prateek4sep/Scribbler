// Get Buttons for the Edit Post Feature
var editButton = document.getElementById("editButton");
var saveButton = document.getElementById("saveButton");

// Get Buttons and Text elements for the Like Feature
var likeButton = document.getElementById("likeButton");
var likedButton = document.getElementById("likedButton");
var counterMessageNone = document.getElementById("counterMessageNone");
var counterMessageSingle = document.getElementById("counterMessageSingle");
var counterMessageMultiple = document.getElementById("counterMessageMultiple");
var count = document.getElementById("count");
var likes = 0;

// Get Buttons and Text elements for the Comment Feature
var commentButton = document.getElementById("commentButton");newComment
var newComment = document.getElementById("newComment");
var commentsContainer = document.getElementById("commentsContainer");

// Get div elements for adding the post content dynamically
var postAuthor = document.getElementById("postAuthor");
var postTitle = document.getElementById("postTitle");
var postBody = document.getElementById("postBody");

// Sets the post body to be editable.
// Handling done to add 'Updated' tag as per the screenshots, would be added only once even for multiple edits.
function editablePost(){
  var postBody = document.getElementById('postBody');
  var postText = postBody.innerText;
  if(postText.startsWith("UPDATED:\n"))
        postText = postText.replace("UPDATED:\n","");
  postBody.innerHTML = postText;
  postBody.contentEditable = "true";
  postBody.classList.add("edit");
}

// Updates the post body with the updated content.
function updatedPost(){
  var postBody = document.getElementById('postBody');
  var editedText = postBody.innerText.replaceAll("\n","<br/>");
  postBody.innerHTML = "UPDATED:<br/>"+editedText;
  postBody.classList.remove("edit");
  postBody.contentEditable = "false";
}

// Sets the post title to be editable.
// Handling done to add 'Updated' tag as per the screenshots, would be added only once even for multiple edits.
function editableTitle(){
  var postTitle = document.getElementById('postTitle');
  var titleText = postTitle.innerText;
  if(titleText.startsWith("UPDATED: "))
        titleText = titleText.replace("UPDATED: ","");
  postTitle.innerHTML = titleText;
  postTitle.contentEditable = "true";
  postTitle.classList.add("edit");
}

// Updates the post title with the updated content.
function updatedTitle(){
  var postTitle = document.getElementById('postTitle');
  var editedText = postTitle.innerText;
  postTitle.innerHTML = "UPDATED: "+editedText;
  postTitle.classList.remove("edit");
  postTitle.contentEditable = "false";
}

// Functionality of Edit button
editButton.onclick = function() {
  saveButton.style.display = "block";
  editButton.style.display = "none";
  editablePost();
  editableTitle();
}

// Functionality of Save button
saveButton.onclick = function() {
  saveButton.style.display = "none";
  editButton.style.display = "block";
  updatedPost();
  updatedTitle();
}

// Sets the post likes message as per the count.
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

// On submitting a comment if not null, add to the top of the displaying container.
commentButton.onclick = function() {
    var newCommentText = newComment.value;
    newComment.value = "";
    var newHTML = "<div class=\"comment\">"+ newCommentText +"</div>";
    if(newCommentText!=""){
        commentsContainer.innerHTML = newHTML + commentsContainer.innerHTML;
    }
}

// On Load, display the content corresponding to the selected stored in session storage before redirection.
window.onload = function() {
    var sessionAuthor = sessionStorage.getItem("author");
    var sessionTitle = sessionStorage.getItem("postTitle");
    var sessionBody = sessionStorage.getItem("postBody");
    if(sessionAuthor.length>0)
        postAuthor.innerHTML = sessionAuthor;
    if(sessionTitle.length>0)
        postTitle.innerHTML = sessionTitle;
    // IMPORTANT: Added same text multiple times for demonstration only, not needed in real world.
    if(sessionBody.length>0)
        postBody.innerHTML = sessionBody +  sessionBody +  sessionBody +  sessionBody +  sessionBody +  sessionBody;
}