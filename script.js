let images = [
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/seed/picsum/200/300",
    "https://picsum.photos/200/300?grayscale",
    "https://picsum.photos/200/300/",
    "https://picsum.photos/200/300.jpg"
];

let randomIndex = Math.floor(Math.random() * images.length);

images.push(images[randomIndex]);


images.sort(() => Math.random() - 0.5);
let imageElements = document.querySelectorAll("#image-container img");

let reset = document.getElementById("reset");
let verify = document.getElementById("verify");
let para = document.getElementById("para");

let selectedImages = [];

imageElements.forEach(function(image, index) {
    image.src = images[index];
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


verify.addEventListener("click", function() {

    if (selectedImages.length === 2) {

        if (selectedImages[0].src === selectedImages[1].src) {

            para.innerText = "You are a human. Congratulations!";

        } else {

            para.innerText = "We can't verify you as a human. You selected the non-identical tiles.";

        }

    }

    verify.style.display = "none";

});