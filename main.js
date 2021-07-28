function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500)
    video.center();
}

function draw(){
    Image(video, 320, 150, 300, 300)
}

function take_snapshot(){
    save('MyFilterImage.png');
}