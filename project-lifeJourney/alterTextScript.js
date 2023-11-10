const textContainer = document.getElementById("text");
const textArray = ["a social homosapien \u{1F64B}",
                    "a developer by profession \u{1F64B}",
                    "an artist by creativity \u{1F9E1}",
                    "a photographer by passion \u{1F64B}"]; // Replace with your desired designations
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentText = textArray[textIndex];
    if (isDeleting) {
        textContainer.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textContainer.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    const typingSpeed = isDeleting ? 35 : 50; // Adjust typing and deleting speed as needed

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeText, 1000); // Delay before starting to delete
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeText, 500); // Delay before typing next text
    } else {
        setTimeout(typeText, typingSpeed);
    }
}

// Start typing
typeText();


