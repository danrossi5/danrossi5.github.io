function createObj() {
	var objects = new THREE.Object3D();
	//playstation
	var loader1 = new THREE.OBJMTLLoader();
	loader1.addEventListener('load', function (event) {
		var object = event.content;
	    object.scale.set(0.0003, 0.0003, 0.0003);
	    object.rotation.x=Math.PI/2;
	    object.rotation.y=Math.PI/2;
	    object.position.set(5.12,7,1.1);
	    objects.add(object);
	});
	loader1.load('assets/models/Playstation/Playstation.obj', 'assets/models/Playstation/Playstation.mtl', {side: THREE.DoubleSide});
	//bedCamera3
	var loader2 = new THREE.OBJMTLLoader();
	loader2.addEventListener('load', function (event) {
		var object = event.content;
	    object.scale.set(1.1, 1.1, 1.1);
	    object.rotation.x=Math.PI/2;
	    object.rotation.y=Math.PI;
	    object.position.set(17,4.8,0.3);
	    objects.add(object);
	});
	loader2.load('assets/models/bed2person/bed1.obj', 'assets/models/bed2person/bed1.mtl', {side: THREE.DoubleSide});
	//computer
	var loader3 = new THREE.OBJMTLLoader();
	loader3.addEventListener('load', function (event) {
		var object = event.content;
	    object.scale.set(1.4, 1.4, 1.4);
	    object.rotation.x=Math.PI/2;
	    object.rotation.y=Math.PI/4;
	    object.position.set(5,6.4,1.1);
	    objects.add(object);
	});
	loader3.load('assets/models/computer/REOB Alyssa computer.obj', 'assets/models/computer/REOB Alyssa computer.mtl', {side: THREE.DoubleSide});
	//chair
	var loader4 = new THREE.OBJMTLLoader();
	loader4.addEventListener('load', function (event) {
		var object = event.content;
	    object.rotation.x=Math.PI/2;
	    object.rotation.y=-Math.PI/2;
	    object.position.set(5.75,5.5,0.37);
	    objects.add(object);
	});
	loader4.load('assets/models/office_chair/office_chair.obj', 'assets/models/office_chair/office_chair.mtl', {side: THREE.DoubleSide});
    //sofa
    var loader5 = new THREE.OBJMTLLoader();
    loader5.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.7, 0.7, 0.7);
        object.rotation.x=Math.PI/2;
        object.position.set(3,24.65,0.35);
        objects.add(object);
    });
    //loader5.load('assets/models/divano/couch_05_occ.obj', 'assets/models/divano/couch_05_occ.mtl', {side: THREE.DoubleSide});
    loader5.load('assets/models/clear_sofa.obj', 'assets/models/clear_sofa.mtl', {side: THREE.DoubleSide});
    //toilet
    var loader6 = new THREE.OBJMTLLoader();
    loader6.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.2, 0.2, 0.2);
        object.rotation.x=Math.PI/2;
        object.rotation.y=Math.PI/2;
        object.position.set(1,5.4,1);
        objects.add(object);
    });
    loader6.load('assets/models/SA_LD_Toilet.obj', 'assets/models/SA_LD_Toilet.mtl', {side: THREE.DoubleSide});
    //carpet
    var loader7 = new THREE.OBJMTLLoader();
    loader7.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.0095, 0.0095, 0.0095);
        object.rotation.x=Math.PI/2;
        //object.rotation.y=Math.PI/2;
        object.position.set(7,7.2,0.37);
        objects.add(object);
    });
    loader7.load('assets/models/carpet/carpet.obj', 'assets/models/carpet/carpet.mtl', {side: THREE.DoubleSide});
    //chair
    var loader8 = new THREE.OBJMTLLoader();
    loader8.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.11, 0.11, 0.11);
        object.rotation.x=Math.PI/2;
        object.rotation.y=Math.PI;
        object.position.set(8.93,6.5,0.3);
        objects.add(object);
    });
    loader8.load('assets/models/singleBed/children_bed.obj', 'assets/models/singleBed/children_bed.mtl', {side: THREE.DoubleSide});
    //radiator
    var loader9 = new THREE.OBJMTLLoader();
    loader9.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.0075, 0.007, 0.0075);
        object.rotation.x=Math.PI/2;
        //object.rotation.y=Math.PI;
        object.position.set(8.5,10.4,0.5);
        objects.add(object);
    });
    loader9.load('assets/models/radiator1/radiator.obj', 'assets/models/radiator1/radiator.mtl', {side: THREE.DoubleSide});
    //bidet
    var loader10 = new THREE.OBJMTLLoader();
    loader10.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.015, 0.015, 0.015);
        object.rotation.x=Math.PI/2;
        object.rotation.y=Math.PI/2;
        object.position.set(1,7.05,0.3);
        objects.add(object);
    });
    loader10.load('assets/models/bidet/bidet.obj', 'assets/models/bidet/bidet.mtl', {side: THREE.DoubleSide});
    //lavatrice
    var loader11 = new THREE.OBJMTLLoader();
    loader11.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.012, 0.012, 0.012);
        object.rotation.x=Math.PI/2;
        object.rotation.y=Math.PI/2;
        object.position.set(1,9.65,0.82);
        objects.add(object);
    });
    loader11.load('assets/models/washing/clothes_washing_machine.obj', 'assets/models/washing/clothes_washing_machine.mtl', {side: THREE.DoubleSide});
    //asciugamano
    var loader12 = new THREE.OBJMTLLoader();
    loader12.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.012, 0.012, 0.012);
        object.rotation.x=Math.PI/2;
        object.rotation.y=-Math.PI/2;
        object.position.set(4.25,5.9,0.8);
        objects.add(object);
    });
    loader12.load('assets/models/towel/towel3.obj', 'assets/models/towel/towel3.mtl', {side: THREE.DoubleSide});
    // speaker
    var loader13 = new THREE.OBJMTLLoader();
    loader13.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.02, 0.02, 0.02);
        object.rotation.x=Math.PI/2;
        object.rotation.y=Math.PI/2;
        object.position.set(0.8,21,2);
        objects.add(object);
    });
    loader13.load('assets/models/speaker/speaker3.obj', 'assets/models/speaker/speaker3.mtl', {side: THREE.DoubleSide});
    //vasca
    var loaderOb = new THREE.OBJLoader();
    loaderOb.load('assets/models/bathtub.obj', function (obj) {
        global_o = obj;
        var multiMaterial = [new THREE.MeshLambertMaterial({color: 0xffffff, side: THREE.DoubleSide})];
        mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
        mesh.scale.set(0.03,0.03,0.03);
        mesh.position.set(3.75,9.3,0.3);
        mesh.rotation.x = Math.PI/2;
        objects.add(mesh);
    });
    //lavandino
    var loaderOb1 = new THREE.OBJLoader();
    loaderOb1.load('assets/models/BathroomSet02.obj', function (obj) {
        global_o = obj;
        var multiMaterial = [new THREE.MeshLambertMaterial({color: 0xffffff, side: THREE.DoubleSide})];
        mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
        mesh.scale.set(0.002,0.002,0.0015);
        mesh.position.set(4.1,7.3,0.3);
        mesh.rotation.z = -Math.PI/2;
        objects.add(mesh);
    });
    var loaderOb2 = new THREE.OBJLoader();
    loaderOb2.load('assets/models/35.obj', function (obj) {
        global_o = obj;
        var multiMaterial = [new THREE.MeshLambertMaterial({color: 0xffffff, side: THREE.DoubleSide})];
        mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
        mesh.scale.set(0.015,0.015,0.015);
        mesh.position.set(1,7.9,0.3);
        mesh.rotation.x = Math.PI/2;
        mesh.rotation.y = Math.PI/2;
        objects.add(mesh);
    });
    //
	//create tableCamera1
	var table = new THREE.Object3D();
	var tableLegsGeometry = new THREE.BoxGeometry(0.1,1,1);
	var tableLegsGeometry1 = new THREE.BoxGeometry(0.5,1,1);
	var tableLeg1 = createMesh(tableLegsGeometry1,'wood-2.jpg',1,1);
	var tableLeg2 = createMesh(tableLegsGeometry,'wood-2.jpg',1,1);
	var tableLeg3 = createMesh(tableLegsGeometry,'wood-2.jpg',1,1);
	var tablePlaneGeometry = new THREE.BoxGeometry(4,1,0.01);
	var tablePlane = createMesh(tablePlaneGeometry,'wood-2.jpg',1,1);
    table.add(tableLeg1);
    tableLeg1.position.set(0.25,0,1);
    table.add(tableLeg2);
    tableLeg2.position.set(1.85,0,1);
    table.add(tableLeg3);
    tableLeg3.position.set(3.7,0,1);
    table.add(tablePlane);
    tablePlane.position.set(1.85,0,1.5+0.005);
    table.rotation.z = Math.PI/2;
    table.position.set(5,4.8,-0.4);
    objects.add(table);
    //create lamp for camera1
    var lamp = makeLamp();
    lamp.position.set(5.1,5.1,1.1);
    lamp.rotation.z = Math.PI/2;
    lamp.scale.set(0.1,0.1,0.1);
    objects.add(lamp);
    //frame1
    var frame1 = makeFrame("fotoAHAH.jpg");
    frame1.position.set(9,10.5,2.3);
    frame1.scale.set(0.16,0.16,0.16);
    objects.add(frame1);
	return objects;
}