// Array of words to be typed
var wordsToType = ["Android Developer", "Front-end Developer","Traveller"];
var textElement = document.getElementById("text");

// Speed at which characters are typed (in milliseconds)
var typingSpeed = 100;

// Function to start typing animation
function startTyping() {
    var wordIndex = 0;

    function typeWord() {
        var word = wordsToType[wordIndex];
        var charIndex = 0;

        function typeCharacter() {
            if (charIndex < word.length) {
                textElement.textContent += word.charAt(charIndex);
                charIndex++;
                setTimeout(typeCharacter, typingSpeed);
            } else {
                setTimeout(eraseWord, 1000); // Delay before erasing the word
            }
        }

        // Start typing the word
        typeCharacter();
    }

    function eraseWord() {
        var word = wordsToType[wordIndex];
        var charIndex = word.length;

        function eraseCharacter() {
            if (charIndex >= 0) {
                var newText = word.substring(0, charIndex);
                textElement.textContent = newText;
                charIndex--;
                setTimeout(eraseCharacter, typingSpeed);
            } else {
                // Move to the next word
                wordIndex = (wordIndex + 1) % wordsToType.length;
                setTimeout(typeWord, 1000); // Delay before typing the next word
            }
        }

        // Start erasing the word
        eraseCharacter();
    }

    // Start typing the first word
    typeWord();
}

// Call the function to start typing animation
startTyping();

// script.js

// Get the icon element by class name
const iconElement = document.querySelector('.icon');

// Add a click event listener to the icon
iconElement.addEventListener('click', function() {
    // Define the action to take when the icon is clicked
    // alert('Icon clicked!'); // You can replace this with your desired action
});

function rotateAnimation() {
  const textElements = document.querySelectorAll('.text');
  textElements.forEach((text, index) => {
      setTimeout(() => {
          text.style.animation = 'none';
          setTimeout(() => {
              text.style.animation = 'rotateText 2s linear forwards 0s';
          }, 100);
      }, index * 2000);
  });
}

function showMiddleText(text) {
  const middleText = document.getElementById('middle-text');
  middleText.textContent = text;
  middleText.style.animation = 'none';
  setTimeout(() => {
      middleText.style.animation = 'showText 2s forwards';
  }, 100);
}

rotateAnimation();

    const paragraph = document.querySelector('.school-about-text p');

    paragraph.addEventListener('mouseenter', () => {
        paragraph.style.animationPlayState = 'paused';
    });

    paragraph.addEventListener('mouseleave', () => {
        paragraph.style.animationPlayState = 'running';
    });

