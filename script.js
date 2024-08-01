const imageFiles = [
    'PHOTO-2024-08-01-12-42-31 2.jpg',
    'PHOTO-2024-08-01-12-42-31 3.jpg',
    'PHOTO-2024-08-01-12-42-31 4.jpg',
    'PHOTO-2024-08-01-12-42-31 5.jpg',
    'PHOTO-2024-08-01-12-42-31 6.jpg',
    'PHOTO-2024-08-01-12-42-31.jpg',
    'PHOTO-2024-08-01-12-48-18 2.jpg',
    'PHOTO-2024-08-01-12-48-18.jpg',
    'PHOTO-2024-08-01-12-48-19.jpg',
    'PHOTO-2024-08-01-12-48-23 2.jpg',
    'PHOTO-2024-08-01-12-48-23 3.jpg',
    'PHOTO-2024-08-01-12-48-23.jpg',
    'PHOTO-2024-08-01-12-48-24 2.jpg',
    'PHOTO-2024-08-01-12-48-24.jpg',
    'PHOTO-2024-08-01-12-48-25 2.jpg',
    'PHOTO-2024-08-01-12-48-25 3.jpg',
    'PHOTO-2024-08-01-12-48-25 4.jpg',
    'PHOTO-2024-08-01-12-48-25 5.jpg',
    'PHOTO-2024-08-01-12-48-25 6.jpg',
    'PHOTO-2024-08-01-12-48-25.jpg',
    'PHOTO-2024-08-01-12-48-26 2.jpg',
    'PHOTO-2024-08-01-12-48-26 3.jpg',
    'PHOTO-2024-08-01-12-48-26 4.jpg',
    'PHOTO-2024-08-01-12-48-26 5.jpg',
    'PHOTO-2024-08-01-12-48-26.jpg',
    'PHOTO-2024-08-01-12-48-27 2.jpg',
    'PHOTO-2024-08-01-12-48-27.jpg',
    'PHOTO-2024-08-01-12-48-31 2.jpg',
    'PHOTO-2024-08-01-12-48-31 3.jpg',
    'PHOTO-2024-08-01-12-48-31 4.jpg',
    'PHOTO-2024-08-01-12-48-31 5.jpg',
    'PHOTO-2024-08-01-12-48-31.jpg',
    'PHOTO-2024-08-01-12-48-32 2.jpg',
    'PHOTO-2024-08-01-12-48-32.jpg',
    'PHOTO-2024-08-01-12-48-33 2.jpg',
    'PHOTO-2024-08-01-12-48-33 3.jpg',
    'PHOTO-2024-08-01-12-48-33 4.jpg',
    'PHOTO-2024-08-01-12-48-33 5.jpg',
    'PHOTO-2024-08-01-12-48-33 6.jpg',
    'PHOTO-2024-08-01-12-48-33 7.jpg',
    'PHOTO-2024-08-01-12-48-33.jpg',
    'PHOTO-2024-08-01-12-48-34 2.jpg',
    'PHOTO-2024-08-01-12-48-34 3.jpg',
    'PHOTO-2024-08-01-12-48-34 4.jpg',
    'PHOTO-2024-08-01-12-48-34 5.jpg',
    'PHOTO-2024-08-01-12-48-34 6.jpg',
    'PHOTO-2024-08-01-12-48-34 7.jpg',
    'PHOTO-2024-08-01-12-48-34 8.jpg',
    'PHOTO-2024-08-01-12-48-34 9.jpg',
    'PHOTO-2024-08-01-12-48-34 10.jpg',
    'PHOTO-2024-08-01-12-48-34 11.jpg',
    'PHOTO-2024-08-01-12-48-34 12.jpg',
    'PHOTO-2024-08-01-12-48-34 13.jpg',
    'PHOTO-2024-08-01-12-48-34.jpg',
    'PHOTO-2024-08-01-12-48-35 2.jpg',
    'PHOTO-2024-08-01-12-48-35 3.jpg',
    'PHOTO-2024-08-01-12-48-35 4.jpg',
    'PHOTO-2024-08-01-12-48-35 5.jpg',
    'PHOTO-2024-08-01-12-48-35 6.jpg',
    'PHOTO-2024-08-01-12-48-35 7.jpg',
    'PHOTO-2024-08-01-12-48-35.jpg'
];

let article = document.querySelector("article")

imageFiles.forEach(fileName => {
    const img = document.createElement('img');
    img.src = `rugzakken/${fileName}`;
    img.alt = fileName;
    article.appendChild(img);
});


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

let totalDisplayed = 15;

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
