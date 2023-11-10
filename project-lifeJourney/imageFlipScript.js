// Array of image sources
var images = ['/project-lifeJourney/images/img1-1.png', '/project-lifeJourney/images/img2.png', '/project-lifeJourney/images/img3.png', '/project-lifeJourney/images/img4.png'];
var currentIndex = 0;

// Function to change the image
function changeImage() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '<img src="' + images[currentIndex] + '" alt="Image ' + (currentIndex + 1) + '">';
    currentIndex = (currentIndex + 1) % images.length;
}

// Set interval to change image every 2 seconds
setInterval(changeImage, 2500);