
let currentIndex = 0;
const slides = document.getElementById("slide");

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // Show the slide at the specified index
    slides[index].style.display = 'block';
}

// Initial slide display
showSlide(currentIndex);

// Function to navigate to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Function to navigate to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}
document.getElementById('prevBtn').addEventListener('click', prevSlide);
document.getElementById('nextBtn').addEventListener('click', nextSlide);


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

