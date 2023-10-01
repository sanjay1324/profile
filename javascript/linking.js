document.addEventListener("DOMContentLoaded", function() {
  var navbarLinks = document.querySelectorAll(".navbar a");

  for (var i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", function(event) {
      event.preventDefault();
      var targetId = this.getAttribute("href").substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }); // Add a closing parenthesis here
  } // Add a closing brace here
});

document.addEventListener("DOMContentLoaded", function() {
	var navbarLinks = document.querySelectorAll(".navItems i");
  
	for (var i = 0; i < navbarLinks.length; i++) {
	  navbarLinks[i].addEventListener("click", function(event) {
		event.preventDefault();
		var targetId = this.getAttribute("href").substring(1);
		var targetElement = document.getElementById(targetId);
  
		if (targetElement) {
		  targetElement.scrollIntoView({ behavior: "smooth" });
		}
	  }); // Add a closing parenthesis here
	} // Add a closing brace here
  });

  const logoutLink = document.getElementById('logout-link');

    // Add a click event listener to the Logout link
    logoutLink.addEventListener('click', function (event) {
        // Prevent the default behavior of the link
        event.preventDefault();

        // Perform any additional logout actions here if needed

        // Redirect the user to the login page
        window.location.href = 'loginregister.html';
    });









