//your code here
let images = [
    "img1",
    "img2",
    "img3",
    "img4",
    "img5"
];

let randomIndex = Math.floor(Math.random() * 5);

images.push(images[randomIndex]);

images.sort(() => Math.random() - 0.5);

let imageElements = document.querySelectorAll("#image-container img");

let reset = document.getElementById("reset");
let verify = document.getElementById("verify");
let heading = document.getElementById("h");
let para = document.getElementById("para");

let selectedImages = [];

imageElements.forEach(function(image, index) {

    image.classList.add(images[index]);

});

imageElements.forEach(function(image) {

    image.addEventListener("click", function() {

        if (selectedImages.length >= 2) {
            return;
        }

        if (selectedImages.includes(image)) {
            return;
        }

        image.classList.add("selected");

        selectedImages.push(image);

        reset.style.display = "inline-block";

        verify.style.display = "none";

        para.innerText = "";

        if (selectedImages.length === 2) {

            verify.style.display = "inline-block";

        }

    });

});

reset.addEventListener("click", function() {

    selectedImages = [];

    imageElements.forEach(function(image) {

        image.classList.remove("selected");

    });

    reset.style.display = "none";

    verify.style.display = "none";

    para.innerText = "";

});


// Verify button
verify.addEventListener("click", function() {

    if (selectedImages.length === 2) {

        let firstImage = selectedImages[0];
        let secondImage = selectedImages[1];

        if (
            firstImage.className === secondImage.className
        ) {

            para.innerText = "You are a human. Congratulations!";

        } else {

            para.innerText = "We can't verify you as a human. You selected the non-identical tiles.";

        }

    }

    verify.style.display = "none";

});