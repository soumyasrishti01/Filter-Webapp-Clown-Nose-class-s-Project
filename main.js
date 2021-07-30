function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500)
    video.center();

    poseNet = ml5.poseNet(video, modleLoaded);
    poseNet.on('pose', gotPoses);
}

function modleLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0) {
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}

function draw(){
    Image(video, 320, 150, 300, 300)
}

function take_snapshot(){
    save('MyFilterImage.png');
}