var editButton = document.getElementById("editButton");
var saveButton = document.getElementById("saveButton");

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