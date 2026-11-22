
const player = document.querySelector(".player");
const video = player.querySelector(".player__video");

const toggle = player.querySelector(".toggle");
const progress = player.querySelector(".progress");
const sliders = player.querySelectorAll(".player__slider");
const skipButtons = player.querySelectorAll("[data-skip]");
const error = document.getElementById("error");


function togglePlay() {
    if (video.paused) {
        video.play().catch(() => {
            error.innerText = "Unable to play video.";
        });
    } else {
        video.pause();
    }
}

function updateButton() {
    toggle.textContent = video.paused ? "►" : "❚❚";
}

toggle.addEventListener("click", togglePlay);

video.addEventListener("click", togglePlay);

video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);


function handleProgress() {
    if (!video.duration) return;

    const percent = (video.currentTime / video.duration) * 100;

    progress.value = percent;
    progress.style.background = `linear-gradient(to right, #00aaff ${percent}%, #ccc ${percent}%)`;
}

video.addEventListener("timeupdate", handleProgress);

function scrub() {
    if (!video.duration) return;

    video.currentTime = (progress.value / 100) * video.duration;
}

progress.addEventListener("input", scrub);


sliders.forEach(function(slider) {

    slider.addEventListener("input", function() {

        if (slider.name === "volume") {
            video.volume = Number(slider.value);
        }

        if (slider.name === "playbackRate") {
            video.playbackRate = Number(slider.value);
        }

    });

});


skipButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        video.currentTime += Number(button.dataset.skip);

    });

});

video.addEventListener("error", function() {
    error.innerText = "Video failed to load. Please check download.mp4.";
});


video.addEventListener("ended", function() {
    toggle.textContent = "►";
});


updateButton();
