var $canvas, canvas;
$canvas = $('#canvas');
canvas = $canvas[0];
var ctx2d;
ctx2d = canvas.getContext('2d');
var paperGeometry = new THREE.PlaneGeometry( 0.3, 0.4);
var paper = createCanvasMesh(paperGeometry);
paper.rotation.z = Math.PI/2;
paper.position.set(5.1,5.8,1.12);


function createCanvasMesh(geom) {
	var canvasMap = new THREE.Texture(canvas);
	var mat = new THREE.MeshPhongMaterial();
	mat.map = canvasMap;
	var mesh = new THREE.Mesh(geom, mat);
	return mesh;
}

var drawText = function (title,content) {
	ctx2d.fillStyle = "rgb(256,256,256)"; 
	ctx2d.fillRect(0, 0, 200, 200);
	ctx2d.fillStyle = "rgb(0,0,0)";
	ctx2d.strokeStyle = "rgb(0,0,0)";
	ctx2d.font="20px Helvetica";
	ctx2d.strokeText(title, 4, 45);
	ctx2d.font="12px Helvetica";
	var distance = 65;
	var pos = 28;
	var result = content.substr(0,pos);
	while (result!=="") {
		ctx2d.fillText(result,4,distance);
		result = content.substr(pos,28);
		distance = distance+15;
		pos = pos+28;
	}
};