noseX = 0;
noseY = 0;

function preload() {
    mustache = loadImage('https://i.postimg.cc/PxYKk6xv/Mustache-filter.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(385, 150);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, noseX, noseY, 30, 20);
}

function take_snapshot() {
    save('project_114.png');
}

function modelLoded() {
    console.log("poseNet model is successfully loaded and initialized!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 13;
        noseY = results[0].pose.nose.y + 7  ;
        console.log("nose X = " + results[0].pose.nose.x);
        console.log("nose Y = " + results[0].pose.nose.y);
    }
}
mustache_x = noseX;
mustache_y = noseY - 10;