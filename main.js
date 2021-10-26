function preload() {

}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses);
}

function draw() {
    image(video, 0, 0, 500, 500);
}

function modelLoaded() {
    console.log("Pose Net is initialized!");
}

function getPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("Nose x = " + results[0].pose.nose.x);
        console.log("Nose y = " + results[0].pose.nose.y);
    }
}

function takeSnapshot() {
    save("myPicture.png");
}