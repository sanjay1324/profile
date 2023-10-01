const firebaseConfig = {
    apiKey: "AIzaSyARE7XW4aOweDK0qhoShpaPeXHogKDs2lY",
    authDomain: "restapi-9ddcf.firebaseapp.com",
    databaseURL: "https://restapi-9ddcf-default-rtdb.firebaseio.com",
    projectId: "restapi-9ddcf",
    storageBucket: "restapi-9ddcf.appspot.com",
    messagingSenderId: "200206877715",
    appId: "1:200206877715:web:13a2d71ea8db679aa3abe6",
    measurementId: "G-5HCPXG2GKF"
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Upload PDF file to Firebase Storage
document.getElementById('uploadButton').addEventListener('click', () => {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    
    if (file) {
        const storageRef = firebase.storage().ref().child(`documents/${file.name}`);        
        storageRef.post(file)
            .then(snapshot => {
                console.log('File uploaded successfully:', snapshot);
                // Optionally, you can save the download URL to the Realtime Database here
            })
            .catch(error => {
                console.error('Error uploading file:', error);
            });
    }
});

// Add a new blog post to the Realtime Database
document.getElementById('postButton').addEventListener('click', () => {
    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('content');

    const title = titleInput.value;
    const content = contentInput.value;

    if (title && content) {
        const newPostRef = database.ref('blogPosts').push();
        newPostRef.set({
            title: title,
            content: content,
        });

        titleInput.value = '';
        contentInput.value = '';
    }
});

// Retrieve and display blog posts from the Realtime Database
const blogPostsList = document.getElementById('blogPosts');
database.ref('blogPosts').on('child_added', snapshot => {
    const post = snapshot.val();
    const postItem = document.createElement('li');
    postItem.innerHTML = `<strong>${post.title}</strong><br>${post.content}`;
    blogPostsList.appendChild(postItem);
});

// Search for blog posts
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const postItems = blogPostsList.getElementsByTagName('li');

    Array.from(postItems).forEach(postItem => {
        const postText = postItem.textContent.toLowerCase();
        if (postText.includes(searchTerm)) {
            postItem.style.display = 'block';
        } else {
            postItem.style.display = 'none';
        }
    });
});
