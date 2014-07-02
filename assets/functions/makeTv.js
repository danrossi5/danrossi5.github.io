var radius = 80;
var film0;
var $video0 = $('#video0');
$video0.hide();
var video0 = $video0[0];
var isOn = false;
var cont = 0;
film0 = new THREE.Texture(video0);
film0.minFilter = THREE.LinearFilter;
film0.magFilter = THREE.LinearFilter;
film0.format = THREE.RGBFormat;
film0.generateMipmaps = false;
film0.needsUpdate = false;
film0.position = new THREE.Vector3(58.9,9.5,-83.5);

film0.update = function () {
	var distance = this.position.distanceTo((!FPenabled) ? camera.position : controls.getObject().position);
	if ( distance <= radius ) {
		video0.volume = 1 * ( 1 - distance / radius );
	} else {
		video0.volume = 0;
	}
}

var film1;
var $video1 = $('#video1');
$video1.hide();
var video1 = $video1[0];
film1 = new THREE.Texture(video1);
film1.minFilter = THREE.LinearFilter;
film1.magFilter = THREE.LinearFilter;
film1.format = THREE.RGBFormat;
film1.generateMipmaps = false;
film1.needsUpdate = false;
film1.position = new THREE.Vector3(58.9,9.5,-83.5);

film1.update = function () {
	var distance = this.position.distanceTo((!FPenabled) ? camera.position : controls.getObject().position);
	if ( distance <= radius ) {
		video1.volume = 1 * ( 1 - distance / radius );
	} else {
		video1.volume = 0;
	}
}

var film2;
var $video2 = $('#video2');
$video2.hide();
var video2 = $video2[0];
film2 = new THREE.Texture(video2);
film2.minFilter = THREE.LinearFilter;
film2.magFilter = THREE.LinearFilter;
film2.format = THREE.RGBFormat;
film2.generateMipmaps = false;
film2.needsUpdate = false;
film2.position = new THREE.Vector3(58.9,9.5,-83.5);

film2.update = function () {
	var distance = this.position.distanceTo((!FPenabled) ? camera.position : controls.getObject().position);
	if ( distance <= radius ) {
		video2.volume = 1 * ( 1 - distance / radius );
	} else {
		video2.volume = 0;
	}
}

function createTv() {
	var tv = new THREE.Object3D();
	var baseX = 0.4;
	var baseY = 0.2;
	var baseZ = 0.01;
	var baseGeometry = new THREE.BoxGeometry(baseX,baseZ,baseY);
	var tvMaterial = new THREE.MeshPhongMaterial({color: 0x000000, metal : true, shininess: 100});
	var base = new THREE.Mesh(baseGeometry, tvMaterial);
	tv.add(base);

	var supportoRadius = 0.02;
	var supportoHeight = 0.3;

	var supportoGeometry = new THREE.CylinderGeometry( supportoRadius, supportoRadius, supportoHeight, 10, 10);
	var supporto = new THREE.Mesh(supportoGeometry, tvMaterial);
	base.add(supporto);
	supporto.position.set(0,supportoHeight/2,-baseY/4);

	var pernoRadius = 0.035;
	var pernoGeometry = new THREE.SphereGeometry( pernoRadius, 16, 16);
	var perno = new THREE.Mesh(pernoGeometry, tvMaterial);
	supporto.add(perno);
	perno.position.set(0,supportoHeight/2,0);

	var schermoX = 0.8;
	var schermoY = 0.5;
	var schermoZ =0.02;
	var textureTv = "tv.jpg";
	var schermoGeometry = new THREE.BoxGeometry(schermoX,schermoY,schermoZ);
	var schermo = new THREE.Mesh(schermoGeometry, tvMaterial);
	perno.add(schermo);
	schermo.position.set(0,0,pernoRadius);

	var pannelloGeometry = new THREE.BoxGeometry(schermoX,schermoY,schermoZ/45);
	var pannello = createMesh(pannelloGeometry,textureTv,1,1);
	schermo.add(pannello);
	pannello.position.set(0,0,1.09*schermoZ/2);

	var ledPanelX = 0.72;
	var ledPanelY = 0.43;
	var ledPanelZ = 0.01;
	var ledPanelGeometry = new THREE.BoxGeometry(ledPanelX,ledPanelY,ledPanelZ);
	var ledPanel0 = createTvMesh(ledPanelGeometry,film0);
	var ledPanel1 = createTvMesh(ledPanelGeometry,film1);
	var ledPanel2 = createTvMesh(ledPanelGeometry,film2);

    pannello.interact = function () {
    	cont = cont+1;
    	if (cont%4===0) {
        	isOn = false;
        	video2.pause();
        	pannello.remove(ledPanel2);
        } else if(cont%4===1) {
        	video0.play();
        	pannello.add(ledPanel0);
        } else if (cont%4===2) {
        	pannello.remove(ledPanel0);
        	pannello.add(ledPanel1);
        	video0.pause();
        	video1.play();
        } else if (cont%4===3) {
        	pannello.remove(ledPanel1);
        	pannello.add(ledPanel2);
        	video1.pause();
        	video2.play();
        }
    }
    toIntersect.push(pannello);
	
	tv.rotation.x = Math.PI/2;
	tv.rotation.y = Math.PI/2;
	tv.scale.set(1.2,1.2,1.2);
	tv.position.set(4.8,7.65,1.125);
	return tv;
}

function createTvMesh (geom,texture) {
  var materialArray = [];
  materialArray.push(new THREE.MeshBasicMaterial({ color: 0x555555  }));
  materialArray.push(new THREE.MeshBasicMaterial({ color: 0x555555  }));
  materialArray.push(new THREE.MeshBasicMaterial({ color: 0x555555  }));
  materialArray.push(new THREE.MeshBasicMaterial({ color: 0x555555   }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture }));
  materialArray.push(new THREE.MeshBasicMaterial({ color: 0xeeee33  }));
  var faceMaterial = new THREE.MeshFaceMaterial(materialArray);
  var mesh = new THREE.Mesh(geom, faceMaterial);

  return mesh;
}