let signUp = document.getElementById("signup")
let signOut = document.getElementById("signout")
let logIn = document.getElementById("login")

signUp.addEventListener("click", signingup() {

})

//js for blog posts
var likesCount = 0;

function addLike() {
  likesCount++;
  document.getElementById('likesCount').textContent = likesCount + ' Likes';
}

function addComment() {
  var commentInput = document.getElementById('commentInput');
  var commentText = commentInput.value.trim();

  if (commentText !== '') {
    var commentsDiv = document.getElementById('comments');
    var newComment = document.createElement('p');
    newComment.textContent = commentText;
    commentsDiv.appendChild(newComment);

    
    commentInput.value = '';
  }
}
