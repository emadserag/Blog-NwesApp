async function fetchUserPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const userPosts = await response.json();
        displayUserPosts(userPosts); // Pass the fetched data to your display function
    } catch (error) {
        console.error("Error fetching user posts:", error);

    }
}

// display News
function displayUserPosts(posts) { // <-- Corrected: 'posts' is now a parameter
    let container = ``;
 
    const rowdataElement = document.getElementById('rowdata'); // Assuming 'rowdata' is the ID of your container div

    if (!rowdataElement) {
        console.error("Error: Element with ID 'rowdata' not found.");
        return; // Exit the function 
    }

    if (!posts || posts.length === 0) {
        rowdataElement.innerHTML = `<p class="text-center">No posts to display.</p>`;
        return;
    }

    for (let i = 0; i < posts.length; i++) { // Corrected: Use 'posts' parameter
        container += `
        <div class="col-md-6 col-lg-4 mb-4"> <div class="card h-100 shadow-sm"> <div class="card-body d-flex flex-column">
                    <p class="text-center mb-3"> 
                        <i class="fa-solid fa-newspaper fa-3x text-primary"></i> 
                    </p>
                    <h3 class="card-title text-center bg-info p-2 rounded">${posts[i].title}</h3>
                    <p class="card-text text-center bg-light p-2 rounded flex-grow-1">${posts[i].body}</p>
                </div>
            </div>
        </div>`;
    }
    document.getElementById('rowdata').innerHTML = container; // <-- Corrected: Use the actual ID directly or the variable if it holds the ID string
}

fetchUserPosts(); // Call the function to fetch and display user posts