toIntersect = [];
var FPenabled = false;
function init() {
	var stats = initStats();
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
	camera.up = new THREE.Vector3(0,1,0);
	camera.position.set(100,100,100);
	camera.lookAt(scene.position);

	trackballControls = new THREE.TrackballControls(camera);

	

	var pointColor = "#ffffff";
	directionalLight = new THREE.DirectionalLight(pointColor);
	directionalLight.position.set(0, 5, 0);
	directionalLight.intensity = 0.4;
	scene.add(directionalLight);

	directionalLight2 = new THREE.DirectionalLight(pointColor);
	directionalLight2.position.set(-15, 5, -15);
	directionalLight2.intensity = 0.8;
	scene.add(directionalLight2);

	directionalLight3 = new THREE.DirectionalLight(pointColor);
	directionalLight3.position.set(10, -10, 10);
	directionalLight3.intensity = 0.8;
	scene.add(directionalLight3);

	var sphereLight = new THREE.SphereGeometry(8,32,32);
    var sphereLightMaterial = new THREE.MeshPhongMaterial({ambient: 0xffffff, color: 0xfff33e, emissive:0xf7f3d5, specular:0xffffff ,shininess: 20, shading: THREE.FlatShading});
    var sphereLightMesh = new THREE.Mesh(sphereLight, sphereLightMaterial);
    sphereLightMesh.position = new THREE.Vector3(0, 200, -150);
    var solarRotation = false;
    scene.add(sphereLightMesh);

	rayMove = new THREE.Raycaster();
	rayMove.ray.direction.set(0, 1, 0);
	var projector = new THREE.Projector();
	rayPointer = new THREE.Raycaster();

    var floorTexture = new THREE.ImageUtils.loadTexture( 'assets/textures/general/grass.png' );
	floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping; 
	floorTexture.repeat.set( 10, 10 );
	var floorMaterial = new THREE.MeshPhongMaterial( { color: 0x444444, map: floorTexture, side: THREE.DoubleSide } );
	var floorGeometry = new THREE.BoxGeometry(350, 350, 5, 20, 10);
	var floor = new THREE.Mesh(floorGeometry, floorMaterial);
	floor.position.set(0,-10,-120);
	floor.rotation.x = Math.PI / 2;
	scene.add(floor);

	var skyBoxGeometry0 = new THREE.BoxGeometry( 600, 700, 800 );
	var skyBoxGeometry = new THREE.BoxGeometry( 600, 700, 800 );
	var skyMaterial0 = new THREE.MeshBasicMaterial( {color: 0x99CBFF, side: THREE.BackSide});
	var skyBox1 = new THREE.Mesh( skyBoxGeometry0, skyMaterial0 );
	skyBox1.position.set(0,0,0);
	scene.add( skyBox1 );

	var image1 = "assets/textures/general/night.jpg";
	
	var materialArray = [];
	for (var i = 0; i < 6; i++)
		materialArray.push( new THREE.MeshBasicMaterial({
			map: THREE.ImageUtils.loadTexture( image1),
			side: THREE.BackSide
		}));
	var skyMaterial1 = new THREE.MeshFaceMaterial( materialArray );
	var skyBox2 = new THREE.Mesh( skyBoxGeometry, skyMaterial1 );
	skyBox2.position.set(0,0,-120);

	home = new THREE.Object3D();
	var loader = new THREE.OBJLoader();
	loader.load('assets/models/home.obj', function (obj) {
		var mesh;
		global_o = obj;

		var multiMaterial = [
		new THREE.MeshLambertMaterial({color: 0xffffff, side: THREE.DoubleSide})
		];
		mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);

		home.add(mesh);
	});

	var floorHeight= 0.3;

	var pavimento = createPavimento();
	home.add(pavimento);


	var spessore = 0.1;
	var doors = makeDoors(floorHeight,spessore);
	home.add(doors);

	var windows = makeWindows(floorHeight,spessore);
	home.add(windows);

	scene.add(home);
	home.rotation.x = -Math.PI/2;
	home.rotation.z = Math.PI/2;
	home.position.set(0,0,26);

	var wall = makeWalls();
	home.add(wall);

	var lamp = makeLamps();
	home.add(lamp);
	var ambiColor = "#0c0c0c";
        var ambientLight = new THREE.AmbientLight(ambiColor);
        home.add(ambientLight);

    var tv = createTv();
    home.add(tv);

    var rubinetti = createRubinetti();
    home.add(rubinetti);

    var wardrobe = makeWardrobes();
    home.add(wardrobe);

    var objs = createObj();
    home.add(objs);

    var disco = createDisco();
    home.add(disco);

	objects.push(home);
	document.addEventListener('mousedown', onDocumentMouseDown, false);

	var mirrorCube, mirrorCubeCamera;
	var cubeGeom = new THREE.BoxGeometry(1, 1, 0.02, 1, 1, 1);
    mirrorCubeCamera = new THREE.CubeCamera( 0.01, 50, 256 );
    scene.add( mirrorCubeCamera );
    var mirrorCubeMaterial = new THREE.MeshBasicMaterial( { envMap: mirrorCubeCamera.renderTarget } );
    mirrorCubeMaterial.side = THREE.DoubleSide;
    mirrorCube = new THREE.Mesh( cubeGeom, mirrorCubeMaterial );
    mirrorCube.position.set(66.9,15.3,-77.75);
    mirrorCube.rotation.z = Math.PI;
    mirrorCube.scale.set(10,10,10);
    mirrorCubeCamera.position = mirrorCube.position;
    scene.add(mirrorCube);

	var cloud = createParticles(100,"cloud.png",200,20,20,15,10);

	var stars = createParticles(1000,"spark.png",10,80,50,50,10,true);

	function onDocumentMouseDown(event) {
		event.preventDefault();
		if (document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element) {
			var vector = new THREE.Vector3(0, 0, 2);
			projector.unprojectVector(vector, camera);
			var raycaster = new THREE.Raycaster(vector,controls.getDirection(new THREE.Vector3(0, 0, 0)).clone());
		} else {
			var vector = new THREE.Vector3(( event.clientX / window.innerWidth ) * 2 - 1, -( event.clientY / window.innerHeight ) * 2 + 1, 0.5);
        	projector.unprojectVector(vector, camera);

        	var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
        	var intersects = raycaster.intersectObjects(toIntersect);
		}
		var intersects = raycaster.intersectObjects(toIntersect);
		if (intersects.length > 0) {
			intersects[0].object.interact && intersects[0].object.interact();
		}
	}
	home.add(paper);
	var step = 0;
	var controlGUI = new function() {
		this.startFP = startFPS;
		this.enableTrackball = true;
		this.solarRotation = false;
		this.bouncingSpeed = 0.03;
		this.enableMirror = false;
	};

	var gui = new dat.GUI();
	gui.add(controlGUI, "startFP");
	gui.add(controlGUI, "enableTrackball");
	gui.add(controlGUI, 'solarRotation').onChange(function (e) {
        solarRotation = e;
        });
	gui.add(controlGUI, 'enableMirror').onChange(function (e) {
		controlGUI.enableMirror = e;
		});

	home.scale.set(10,10,10);
	home.position.set(140,-10,-35);
	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(0xffffff);
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
	$('body').append(renderer.domElement);
	render();
	function render() {
		stats.update();
		paper.material.map.needsUpdate = true;
		if (controlGUI.enableTrackball) {
			trackballControls.update();
		}
		TWEEN.update();
		// first person controls
		if (FPenabled === true) {
			computeFPControls();
			film0.update();
			film1.update();
			film2.update();
		}
		if (solarRotation) {
			directionalLight.intensity = 0.4;
            step += controlGUI.bouncingSpeed;
            if(5 + (75 * (Math.sin(step / 3)))>0) {
            	directionalLight2.intensity = Math.sin(step/3);
            	directionalLight3.intensity = Math.sin(step/3);
            	scene.add(skyBox1);
            	scene.remove(skyBox2);
            	home.add(cloud);
            	home.remove(stars);
            	cloud.position.set(0,-(15 * (Math.cos(step / 3))),-2);
	            
	            cont = cont+1;
            } else {
            	directionalLight2.intensity = 0.2;
        		directionalLight3.intensity = 0.2;
            	scene.add(skyBox2);
            	scene.remove(skyBox1);
            	home.add(stars);
            	home.remove(cloud);
            }
            sphereLightMesh.position.y = 20 + (200 * (Math.sin(step / 3)));
            sphereLightMesh.position.x = (300 * (Math.cos(step / 3)));

            directionalLight.position = sphereLightMesh.position;

        } else {
        	directionalLight.intensity = 0.8;
        	directionalLight2.intensity = 0.8;
        	directionalLight3.intensity = 0.8;
        }
        if (controlGUI.enableMirror) {
	        mirrorCube.visible = false;
	    	mirrorCubeCamera.updateCubeMap( renderer, scene );
	    	mirrorCube.visible = true;
	    }
		requestAnimationFrame(render);

		if (cont%4===1) {
		if (film0) film0.needsUpdate = true;
		if (film1) film1.needsUpdate = false;
		if (film2) film2.needsUpdate = false;
		} else if (cont%4===2) {
		if (film0) film0.needsUpdate = false;
		if (film1) film1.needsUpdate = true;
		if (film2) film2.needsUpdate = false;
		}  else if (cont%4===3) {
		if (film0) film0.needsUpdate = false;
		if (film1) film1.needsUpdate = false;
		if (film2) film2.needsUpdate = true;
		} else if (cont%4===0) {
		if (film0) film0.needsUpdate = false;
		if (film1) film1.needsUpdate = false;
		if (film2) film2.needsUpdate = false;
		}

  		renderer.render(scene, camera);
	}


	window.addEventListener('resize', onWindowResize, false);
}