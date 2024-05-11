const dropdownBtn = document.getElementById("btn-menu");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow-menu");

const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
  };
  dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
  });

  document.documentElement.addEventListener("click", function () {
    if (dropdownMenu.classList.contains("show")) {
      toggleDropdown();
    }
  });

/*sign up*/
var signUp = document.getElementById("signup")
signUp.addEventListener("click", function() {
    window.location.href = "form.html";

})

    document.getElementById("signup-form").addEventListener("submit", function(event) {event.preventDefault();

        var email = document.getElementById("signup-email").value;
        
        var password = document.getElementById("signup-password").value;
                    alert("please fill in all fields.")
            return;
        }

    });


    /* login in*/
    var logIn = document.getElementById("login")
    Login.addEventListener("click", function() {
        window.location.href = "login.html";
    
    })
    
        document.getElementById("login-form").addEventListener("submit", function(event) {event.preventDefault();
    
            var email = document.getElementById("login-email").value;
            
            var password = document.getElementById("login-password").value;
                        alert("please fill in all fields.")
                return;
            }
    
        });
    
    // Search functionality
document.getElementById("search-btn").addEventListener("click", function() {
    var searchInput = document.getElementById("search-input").value;
    var searchResultsContainer = document.getElementById("search-results");

    searchResultsContainer.innerHTML = "";

    // Perform search (simulated in this example)
    var searchResults = performSearch(searchInput);

    // Display search results
    displaySearchResults(searchResults);
});

function performSearch(query) {
    // Simulated data for demonstration
    var data = [
        { title: "Result 1", description: "Description of result 1" },
        { title: "Result 2", description: "Description of result 2" },
        { title: "Result 3", description: "Description of result 3" }
    ];

    // Filter data based on query (in this example, search by title)
    return data.filter(function(item) {
        return item.title.toLowerCase().includes(query.toLowerCase());
    });
}

// Display search results
function displaySearchResults(results) {
    var searchResultsContainer = document.getElementById("search-results");

    if (results.length === 0) {
        searchResultsContainer.innerHTML = "<p>No results found.</p>";
    } else {
        var resultList = document.createElement("ul");

        results.forEach(function(result) {
            var listItem = document.createElement("li");
            listItem.innerHTML = "<strong>" + result.title + "</strong>: " + result.description;
            resultList.appendChild(listItem);
        });

        searchResultsContainer.appendChild(resultList);
    }
}


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


