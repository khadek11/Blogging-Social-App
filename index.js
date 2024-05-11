/*sign up*/
var signUp = document.getElementById("signup")
signUp.addEventListener("click", function() {
    window.location.href = "css/form.html";

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
        window.location.href = "css/login.html";
    
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