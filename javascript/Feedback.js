// Initialize Firebase with your configuration


firebase.initializeApp(firebaseConfig);

// Function to submit feedback
function submitFeedback(event) {
    event.preventDefault();
    var feedback = document.getElementById("feedback").value;

    // Reference to the Firebase Realtime Database
    var database = firebase.database();

    // Push the feedback to the "feedback" node
    database.ref("feedback").push({
        feedback: feedback
    });

    // Clear the form
    document.getElementById("feedback").value = "";
}

// Function to submit queries
function submitQuery(event) {
    event.preventDefault();
    var query = document.getElementById("query").value;

    // Reference to the Firebase Realtime Database
    var database = firebase.database();

    // Push the query to the "queries" node
    database.ref("queries").push({
        query: query
    });

    // Clear the form
    document.getElementById("query").value = "";
}
