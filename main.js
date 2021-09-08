noseX = ""
noseY = ""
function setup() {
	canvas =  createCanvas(400, 400);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}
function draw() {
	image(video, 0, 0, 400, 400);
}
function modelLoaded() {
	console.log('PoseNet Is Initialized');
  }
function gotPoses(results)
  {
	if(results.length > 0)
	{
	  console.log(results);
	  noseX = results[0].pose.leftWrist.x;
	  noseY = results[0].pose.rightWrist.x;
	  
	 

	}
  }
  