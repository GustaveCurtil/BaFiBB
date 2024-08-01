// Select all images inside article tags and convert NodeList to an array
let images = Array.from(document.querySelectorAll("article img"));

// Shuffle the images array using a proper shuffle method (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(images);

let totalDisplayed = 5;

// Ensure totalDisplayed does not exceed the number of available images

for (let i = 0; i < images.length; i++) {
    const image = images[i];
    if (i < totalDisplayed) {

        if (i === 0 || !!(i && !(i % 2))) {
            image.style.top = Math.floor(Math.random() * 12) * 2 + '%';
        } else {
            image.style.bottom = Math.floor(Math.random() * 12) * 2 + '%';
        }
    
        if (i < (totalDisplayed / 2)) {
            image.style.left = Math.floor(Math.random() * 12) * 2 + '%';
        } else {
            image.style.right = Math.floor(Math.random() * 12) * 2 + '%';
        }
    
        image.style.zIndex = Math.floor(Math.random() * 10);

    } else {
        image.style.display = 'none';
    }
}
