



// I don't think you will need to use 
// promises in this polling function but perhaps 
// in the http call to get the page content

const millisecondInterval = 5000;

function grabPosts() {
    // Fetch a copy of the remote page here

    setTimeout(function() {
        grabPosts();
    }, millisecondInterval);
}

// Call this function when script starts to make the poller start
grabPosts();



