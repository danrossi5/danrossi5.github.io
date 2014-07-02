function createLamp(lightDistance,lightIntensity,x,y,z,angle) {
	var lampColor = '#FFFFF0';
	var lightColor = "#FFFACD";
	var yellow = "#808080";
	var lamp = new THREE.Object3D();
	filoHeight = 0.5;
	filoRadius = 0.005;
	var semiSphereRadius = 0.25;
	var filoGeometry = new THREE.CylinderGeometry( filoRadius, filoRadius, filoHeight, 8 );
	var filoMaterial = new THREE.MeshPhongMaterial( {color: lampColor, metal:true} );
	var filo = new THREE.Mesh(filoGeometry, filoMaterial);
	filo.rotation.x = -Math.PI/2;
    var semiSphereGeometry = new THREE.SphereGeometry(semiSphereRadius, 48, 48, 0, 2*Math.PI, Math.PI/2,Math.PI);
    var semiSphereMaterial = new THREE.MeshPhongMaterial({ambient: 0xffffff, color: lampColor, shininess: 30, shading: THREE.FlatShading, metal:true});
    semiSphereMaterial.side = THREE.DoubleSide;
    var semiSphere = new THREE.Mesh(semiSphereGeometry, semiSphereMaterial);
    semiSphere.position.set(0,0.5,0);
    semiSphere.DoubleSide;
    semiSphere.castShadow = true;
    filo.add(semiSphere);

    var bulb = new THREE.Object3D();
    var bulbRadiusMin = 0.025;
    var bulbRadiusMax = 0.04;
    var bulbHeight = 0.045;
    var bulbCylinderGeometry = new THREE.CylinderGeometry(bulbRadiusMax, bulbRadiusMin, bulbHeight, 32 );
    var bulbCylinderMaterial = new THREE.MeshPhongMaterial({ambient: 0xffffff, color: lightColor, shininess: 100, shading: THREE.FlatShading, opacity : 0.7, transparent : true});
    var bulbCylinder = new THREE.Mesh(bulbCylinderGeometry, bulbCylinderMaterial);
    bulb.add(bulbCylinder);

    var bulbSphereGeometry = new THREE.SphereGeometry(bulbRadiusMax, 32, 32, 0, 2*Math.PI, Math.PI*3/2,Math.PI/2);
    var bulbSphereMaterial = new THREE.MeshPhongMaterial({ambient: 0xffffff, color: lightColor, shininess: 100, shading: THREE.FlatShading, opacity : 0.7, transparent : true});
    bulbSphere = new THREE.Mesh(bulbSphereGeometry, bulbSphereMaterial);
    bulbSphere.position.set(0,bulbHeight/2,0);
    bulb.add(bulbSphere);
    bulb.position.set(0, -0.85*semiSphereRadius, 0);

    semiSphere.add(bulb);

    var point = new THREE.Object3D();
    
    bulb.add(point);
    point.position.set(0,2,0);
    var light = new THREE.PointLight( 0xffffff, lightIntensity, lightDistance );
    semiSphere.add( light );
    lamp.add(filo);
	var interruttore = new THREE.Object3D();
    var rx = 0.15,ry=0.005,rz=0.1;
    var riquadroGeometry = new THREE.BoxGeometry(0.15,0.005,0.1);
    var riquadroMaterial = new THREE.MeshPhongMaterial( {color: 0xDAA520, metal:true} );
    var riquadro = new THREE.Mesh(riquadroGeometry, riquadroMaterial);
    riquadro.position.set(rx/2,ry/2,rz/2);
    var quadroGeometry = new THREE.BoxGeometry(0.8*rx,1.4*ry,0.8*rz);
    var quadroMaterial = new THREE.MeshPhongMaterial( {color:0xffffff, metal : true} );
    var quadro = new THREE.Mesh(quadroGeometry, quadroMaterial);
    quadro.position.set(0,ry/2,0);
    var buttonGeometry = new THREE.BoxGeometry(0.2*rx,3*ry,0.65*rz);
    var button = new THREE.Mesh(buttonGeometry, quadroMaterial);
    quadro.add(button);
    riquadro.add(quadro);
    interruttore.add(riquadro);
    toIntersect.push(button);
    button.position.set(0,2*ry,0);
    button.on = false;
    button.interact = function () {
        if(!button.on) {
            button.position.set(0,ry,0);
            light.intensity = 1;
            button.on = true;
        }
        else {
            button.position.set(0,2*ry,0);
            light.intensity = 0;
            button.on = false;
        }
    }
    interruttore.rotation.z = angle;
    interruttore.position.set(x,y,z);
    home.add(interruttore);
	return lamp;
}

function makeLamp() {
    var color = "#1C39BB";
    var lampColor = "#1C39BB";
    var lightGrey = "#FFCC00";
    var planeColor = "#ABCDEF";
    var sphereColor = "#99CBFF";
    var yellow = "#FFFF66";
    var lightColor = "#FFFACD";
    // creation of an object lamp
    var lamp = new THREE.Object3D();
    var lamp_x = 0;
    var lamp_y = 0;

    // creation of the base of the lamp
    var baseRadius = 1.5;
    var baseHeight = 0.3;
    var baseGeometry = new THREE.CylinderGeometry( baseRadius, baseRadius, baseHeight, 32 );
    var baseMaterial = new THREE.MeshPhongMaterial( {color: lampColor, shininess: 30, shading: THREE.FlatShading, metal: true} );
    var base = new THREE.Mesh( baseGeometry, baseMaterial );
    base.rotation.x = Math.PI/2;
    base.position.set(0,0,(baseHeight/2));
    base.castShadow = true;
    lamp.add(base);

    // creation of the first arm of the lamp
    var armHeight = 3;
    var armRadius = 0.4;
    var arm1 = mkJoint(armRadius, armHeight,sphereColor,lampColor);
    arm1.position.set(0,armRadius+baseHeight/2,0);
    arm1.sphere.rotation.y = Math.PI/2;
    arm1.castShadow = true;
    base.add(arm1);

    var arm2 = mkJoint(armRadius, armHeight,sphereColor,lampColor);
    arm1.hook.add(arm2);
    arm2.rotation.x = Math.PI/3;

    var sphereGeometry = new THREE.SphereGeometry(armRadius, 32, 32);
    var sphereMaterial = new THREE.MeshPhongMaterial({color: sphereColor, shininess: 3, shading: THREE.FlatShading, metal: true});
    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(0, 0, 0);
    sphere.castShadow = true;
    arm2.hook.add(sphere);

    var semiSphereRadius = 1.5;
    var semiSphereGeometry = new THREE.SphereGeometry(semiSphereRadius, 48, 48, 0, 2*Math.PI, Math.PI/2,Math.PI);
    var semiSphereMaterial = new THREE.MeshPhongMaterial({ambient: 0xffffff, color: lampColor, shininess: 30, shading: THREE.FlatShading, metal:true});
    semiSphereMaterial.side = THREE.DoubleSide;
    var semiSphere = new THREE.Mesh(semiSphereGeometry, semiSphereMaterial);
    semiSphere.position.set(0, semiSphereRadius+armRadius, 0);
    semiSphere.DoubleSide;
    semiSphere.castShadow = true;
    sphere.add(semiSphere);
    sphere.rotation.x = Math.PI/2;

    var bulb = new THREE.Object3D();
    var bulbRadiusMin = .35;
    var bulbRadiusMax = 0.5;
    var bulbHeight = 0.5;
    var bulbCylinderGeometry = new THREE.CylinderGeometry(bulbRadiusMax, bulbRadiusMin, bulbHeight, 32 );
    var bulbCylinderMaterial = new THREE.MeshPhongMaterial({ambient: 0xffffff, color: lightColor, shininess: 100, shading: THREE.FlatShading, opacity : 0.7, transparent : true});
    var bulbCylinder = new THREE.Mesh(bulbCylinderGeometry, bulbCylinderMaterial);
    bulb.add(bulbCylinder);

    var bulbSphereGeometry = new THREE.SphereGeometry(bulbRadiusMax, 32, 32, 0, 2*Math.PI, Math.PI*3/2,Math.PI/2);
    var bulbSphereMaterial = new THREE.MeshPhongMaterial({ambient: 0xffffff, color: lightColor, shininess: 100, shading: THREE.FlatShading, opacity : 0.7, transparent : true});
    bulbSphere = new THREE.Mesh(bulbSphereGeometry, bulbSphereMaterial);
    bulbSphere.position.set(0,bulbHeight/2,0);
    bulb.add(bulbSphere);
    bulb.position.set(0, -semiSphereRadius/2, 0);

    semiSphere.add(bulb);

    var point = new THREE.Object3D();
    
    bulb.add(point);
    point.position.set(0,2,0);

    lamp.castShadow = true;
    var pointColor = "#ffffff";
    var spotLight = new THREE.SpotLight(pointColor);
    spotLight.angle = Math.PI/9;
    spotLight.target = point;
    spotLight.intensity = 1;
    spotLight.distance = 12;
    spotLight.castShadow = true;
    spotLight.shadowCameraNear=2;
    bulb.add(spotLight);

    var light = new THREE.PointLight( 0xffffff, 2, 3 );
    semiSphere.add( light );

    semiSphere.on = false;
    semiSphere.interact = function() {
        if(!semiSphere.on) {
            spotLight.intensity = 1;
            light.intensity = 2;
            semiSphere.on = true;
        }
        else {
            spotLight.intensity = 0;
            light.intensity = 0;
            semiSphere.on = false;
        }
    }
    toIntersect.push(semiSphere);
    
    return lamp;
}

function makeLamps() {
	var lamps = new THREE.Object3D();
	var height = 1.6;
	lampIngresso = createLamp(70,0,2,17.48,height,Math.PI);
	lampIngresso.position.set(5,14,3.25);
	lampBagno1 = createLamp(50,0,3.2,10.48,height,Math.PI);
	lampBagno1.position.set(2.2,7.5,3.25);
	lampBagno2 = createLamp(45,0,14.28,7.3,height,Math.PI/2);
	lampBagno2.position.set(12.5,7.5,3.25);
	lampCamera1 = createLamp(50,0,7.2,10.48,height,Math.PI);
	lampCamera1.position.set(7.5,7.5,3.25);
	lampCamera2 = createLamp(50,0,14.52,14.7,height,-Math.PI/2);
	lampCamera2.position.set(17,14,3.25);
	lampCamera3 = createLamp(50,0,17.7,10.48,height,Math.PI);
	lampCamera3.position.set(17,7.5,3.25);
	lampCameraPranzo1 = createLamp(60,0,3,17.72,height,0);
	lampCameraPranzo1.position.set(2.9,21.5,3.25);
	lampCameraPranzo2 = createLamp(60,0,6,17.72,height,0);
	lampCameraPranzo2.position.set(7.3,21.5,3.25);
	lampCucina = createLamp(55,0,11.4,17.72,height,0);
	lampCucina.position.set(12.5,21.5,3.25);
	lampCorridoio = createLamp(50,0,10.52,15.5,height,-Math.PI/2);
	lampCorridoio.position.set(12.5,14,3.25);
	lamps.add(lampIngresso);
	lamps.add(lampBagno1);
	lamps.add(lampBagno2);
	lamps.add(lampCamera1);
	lamps.add(lampCamera2);
	lamps.add(lampCamera3);
	lamps.add(lampCameraPranzo1);
	lamps.add(lampCameraPranzo2);
	lamps.add(lampCucina);
	lamps.add(lampCorridoio);
	return lamps;
}