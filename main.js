var body = document.getElementById("body");
var videoSource = document.getElementById("video-source");

function jour() {
    body.classList.toggle("night");
    if (body.classList.contains("night")) {
        videoSource.src ="./52039-467145237_large(2).mp4";
    } else {
        videoSource.src = "./15451-264243720_large.mp4";
    }
    var video = document.getElementById("background-video");
    video.load();
    var cvButton = document.getElementById("cv-button");
cvButton.onclick = function() {
    window.open("path/to/your/cv.pdf", "_blank"); // Remplace "path/to/your/cv.pdf" par le chemin vers ton CV
};
}
