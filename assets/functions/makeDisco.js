var Sound = function ( sources) {
    var audio = document.createElement( 'audio' );
    for ( var i = 0; i < sources.length; i ++ ) {
        var source = document.createElement( 'source' );
        source.src = sources[ i ];
        audio.appendChild( source );
    }
    this.play = function () {
        audio.play();
        audio.volume = 1
    }
    this.pause = function() {
        audio.pause();
    }
    this.stop = function() {
        audio.pause();
        audio.currentTime = 0;
    }

}

function createDisco() {
    var object;
	var objects = new THREE.Object3D();
    var loader1 = new THREE.OBJMTLLoader();
    loader1.addEventListener('load', function (event) {
        object = event.content;
        object.scale.set(0.5, 0.5, 0.5);
        object.rotation.x=Math.PI;
        object.rotation.z=-Math.PI/2;
        object.position.set(4.25,21,3.5);
    });
    loader1.load('assets/models/faretti/track-lights.obj', 'assets/models/faretti/track-lights.mtl', {side: THREE.DoubleSide});
    var point1 = new THREE.Object3D();
    objects.add(point1);
    var point2 = new THREE.Object3D();
    objects.add(point2);
    var point3 = new THREE.Object3D();
    objects.add(point3);
    var point4 = new THREE.Object3D();
    objects.add(point4);
    point1.position.set(2.25,18.5,1.5);
    point2.position.set(3.57,24.5,1.5);
    point3.position.set(5.25,19.5,1.5);
    point4.position.set(5.25,21.5,1.5);
    var pointColor1 = "#ffff00";
    var spotLight1 = new THREE.SpotLight(pointColor1);
    spotLight1.angle = Math.PI/9;
    spotLight1.target = point1;
    spotLight1.intensity = 0;
    spotLight1.distance = 80;
    objects.add(spotLight1);
    spotLight1.position.set(4.24,18.5,3.3);
    var pointColor2 = "#00ffff";
    var spotLight2 = new THREE.SpotLight(pointColor2);
    spotLight2.angle = Math.PI/9;
    spotLight2.target = point2;
    spotLight2.intensity = 0;
    spotLight2.distance = 80;
    objects.add(spotLight2);
    spotLight2.position.set(4.24,20.5,3.3);
    var pointColor3 = "#991199";
    var spotLight3 = new THREE.SpotLight(pointColor3);
    spotLight3.angle = Math.PI/9;
    spotLight3.target = point3;
    spotLight3.intensity = 0;
    spotLight3.distance = 80;
    objects.add(spotLight3);
    spotLight3.position.set(4.24,22.5,3.3);
    var pointColor4 = "#66FF00";
    var spotLight4 = new THREE.SpotLight(pointColor4);
    spotLight4.angle = Math.PI/9;
    spotLight4.target = point4;
    spotLight4.intensity = 0;
    spotLight4.distance = 80;
    objects.add(spotLight4);
    spotLight4.position.set(4.24,24.5,3.3);
    var grey = '#888888';
    var buttonGeometry = new THREE.CylinderGeometry( 0.15, 0.15, 0.1, 6, 6);
    var buttonMaterial = new THREE.MeshPhongMaterial( {color:grey, metal:true, ambient:grey, emissive:grey, specular:grey,shininess:30} );
    var button = new THREE.Mesh(buttonGeometry, buttonMaterial);
    objects.add(button);
    button.position.set(0.5,21,1.5);
    button.rotation.z = Math.PI/2;
    button.onDisco = false;
    toIntersect.push(button);
	var audio = new Sound( [ 'assets/music/Avicii-Levels.mp3' ]);
    button.interact = function () {
        if(!button.onDisco) {
            audio.play();
            objects.add(object);
            spotLight1.intensity = 0.8;
            spotLight2.intensity = 0.8;
            spotLight3.intensity = 0.8;
            spotLight4.intensity = 0.8;
            scene.remove(directionalLight);
            scene.remove(directionalLight2);
            scene.remove(directionalLight3);
            var movTween4 = new TWEEN.Tween(spotLight4.target.position)
                .to({ x: (Math.random()*5.5)+3.5, y:23, z:1.5 }, 1500)
                .repeat(Infinity)
                .start();
            var movTween3 = new TWEEN.Tween(spotLight3.target.position)
                .to({ x: (Math.random()*5.5)+3.5, y:23, z:1.5 }, 1500)
                .repeat(Infinity)
                .start();
            var movTween2 = new TWEEN.Tween(spotLight2.target.position)
                .to({ x: (Math.random()*5.5)+3.5, y:23, z:1.5 }, 1500)
                .repeat(Infinity)
                .start();
            var movTween1 = new TWEEN.Tween(spotLight1.target.position)
                .to({ x: (Math.random()*5.5)+3.5, y:23, z:1.5 }, 1500)
                .repeat(Infinity)
                .start();
            button.onDisco = true;
        }
        else {
            scene.add(directionalLight);
            scene.add(directionalLight2);
            scene.add(directionalLight3);
        	spotLight1.intensity = 0;
        	spotLight2.intensity = 0;
        	spotLight3.intensity = 0;
        	spotLight4.intensity = 0;
            button.onDisco = false;
            audio.stop();
            objects.remove(object);
        }
    }
    return objects;
}