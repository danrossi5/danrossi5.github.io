function makeDoors(floorHeight,spessore) {
    var textureEsterna = "portaEsterna.jpg";
    var texture = "portaEsterna1.jpg";
    var colorManiglia = "#D2D2D2";
    var colorManigliaIngresso = "#DAA520";
    var doors = new THREE.Object3D();
    var manigliaIngresso = makeManiglia(0.025,0.02,0.05,0.125,colorManigliaIngresso,true);
    manigliaIngresso.position.set(0.6,0.05,0);
    var doorIngresso = createDoubleDoor(0.1,3,2.2,textureEsterna,manigliaIngresso,true);
    doorIngresso.rotation.z= -Math.PI/2;
    doorIngresso.position.set(0.45,15.6,floorHeight);
    doors.add(doorIngresso);

    var manigliaBagno1 = makeDoubleManiglia(0.015,0.015,0.035,0.125,colorManiglia,0.4,0.05);
    var doorBagno1 = createDoor(1,spessore,2.2,texture,manigliaBagno1,false);
    doorBagno1.position.set(1.9,10.5,floorHeight);
    doors.add(doorBagno1);

    var manigliaCamera1 = makeDoubleManiglia(0.015,0.015,0.035,0.125,colorManiglia,0.4,0.05);
    var doorCamera1 = createDoor(1,spessore,2.2,texture,manigliaCamera1,false);
    doorCamera1.position.set(5.8,10.5,floorHeight);
    doors.add(doorCamera1);

    var manigliaCameraPranzo = makeDoubleManiglia(0.015,0.015,0.035,0.125,colorManiglia,0.85,0.05);
    manigliaCameraPranzo.position.set(-0.5,0,0);
    var doorCameraPranzo = createDoubleDoor(2,spessore,2.2,texture,manigliaCameraPranzo,false,true);
    doorCameraPranzo.position.set(6.4,17.65,floorHeight);
    doors.add(doorCameraPranzo);

    var manigliaCorridoio = makeDoubleManiglia(0.015,0.015,0.035,0.125,colorManiglia,0.05,0.425,true);
    var doorCorridoio = createDoubleDoor(spessore,2,2.2,texture,manigliaCorridoio,true);
    doorCorridoio.rotation.z = -Math.PI/2;
    doorCorridoio.position.set(10.45,15.1,floorHeight);
    doors.add(doorCorridoio);

    var manigliaCucina = makeDoubleManiglia(0.015,0.015,0.035,0.125,colorManiglia,0.4,0.05);
    var doorCucina = createDoor(1,spessore,2.2,texture,manigliaCucina,false);
    doorCucina.position.set(11.9,17.5,floorHeight);
    doors.add(doorCucina);

    var manigliaCamera2 = makeDoubleManiglia(0.015,0.015,0.035,0.125,colorManiglia,0.05,0.4,true);
    var doorCamera2 = createDoor(spessore,1,2.2,texture,manigliaCamera2,true);
    doorCamera2.rotation.z = Math.PI/2;
    doorCamera2.position.set(14.33,15,floorHeight);
    doors.add(doorCamera2);

    var manigliaCamera3 = makeDoubleManiglia(0.015,0.015,0.035,0.125,colorManiglia,0.4,0.05);
    var doorCamera3 = createDoor(1,spessore,2.2,texture,manigliaCamera3,false);
    doorCamera3.position.set(16.4,10.5,floorHeight);
    doors.add(doorCamera3);

    var manigliaBagno2 = makeDoubleManiglia(0.015,0.015,0.035,0.125,colorManiglia,0.05,0.4,true);
    var doorBagno2 = createDoor(spessore,1,2.2,texture,manigliaBagno2,true);
    doorBagno2.rotation.z = Math.PI/2;
    doorBagno2.position.set(14.33,6.1,floorHeight);
    doors.add(doorBagno2);
    return doors;
}

function createDoor(bx,by,h,texture,maniglia,toRotate,flag) {
    var hook1 = new THREE.Object3D();
    var hook = new THREE.Object3D();
    if (toRotate) {
        var help = bx;
        bx=by;
        by=help;
    }
    hook1.add(hook);
    var doorGeometry = new THREE.BoxGeometry(bx,by,h);
    var door = createMesh(doorGeometry, texture,1,1);
    hook.add(door);
    door.open = false;
    var angle = -Math.PI/2;
    if (flag!==undefined)
        angle = Math.PI/2;
    else if(toRotate) {
        angle = Math.PI/2;
    }
    door.interact = function () {
        if(!door.open) {
            var movTween1 = new TWEEN.Tween(door.parent.rotation)
                .to({ z: angle }, 1000)
                .start();
            door.open = true;
        }
        else {
            var movTween1 = new TWEEN.Tween(door.parent.rotation)
                .to({ z: 0 }, 1000)
                .start();
            door.open = false;
        }
    }
    door.add(maniglia);
    door.position.set(bx/2,by/2,h/2);
    
    toIntersect.push(door);
    return hook1;


}

function createDoubleDoor(bx,by,h,texture,maniglia,toRotate,flag) {
    var door = new THREE.Object3D();
    if (toRotate) {
    var door1 = createDoor(bx,by/2,h,texture,maniglia,toRotate,flag);
    var doorGeometry = new THREE.BoxGeometry(by/2,bx,h);
    } else {
        var door1 = createDoor(bx/2,by,h,texture,maniglia,toRotate,flag);
        var doorGeometry = new THREE.BoxGeometry(bx/2,by,h);
    }
    var door2 = createMesh(doorGeometry, texture,1,1);
    if(toRotate)
        door2.position.set(3*by/4,bx/2,h/2);
    else
        door2.position.set(3*bx/4,by/2,h/2);
    door.add(door1);
    door.add(door2);
    return door;
}

function makeDoubleManiglia(radius,radius1,h1,length,color,offSetX,offSetY,toRotate) {
    var maniglia = new THREE.Object3D();
    var maniglia1 = makeManiglia(radius,radius1,h1,length,color);
    var maniglia2 = makeManiglia(radius,radius1,h1,length,color);
    if (toRotate===undefined) {
        maniglia1.position.set(+offSetX,offSetY,0);
        maniglia2.rotation.x = Math.PI;
        maniglia2.position.set(+offSetX,-offSetY,0);
    } else {
        maniglia2.rotation.x = Math.PI;
        maniglia1.position.set(offSetY,offSetX,0);
        maniglia2.position.set(offSetY,-offSetX,0);
    }
    maniglia.add(maniglia1);
    maniglia.add(maniglia2);
    return maniglia;
}

function makeManiglia(radius,radius1,h1,length,color) {
    var maniglia = new THREE.Object3D();
    var cylinder1Geometry = new THREE.CylinderGeometry( radius, radius, h1, 20, 20);
    var material = new THREE.MeshPhongMaterial({color: color, metal:true});
    var cylinder1 = new THREE.Mesh(cylinder1Geometry, material);
    cylinder1.position.set(0,h1/2,0);
    var torusGeometry = new THREE.TorusGeometry( radius1, radius, 16, 10 , Math.PI/2);
    var torus = new THREE.Mesh(torusGeometry, material);
    cylinder1.add(torus);
    torus.position.set(-radius1,h1/2-0.001,0);
    var cylinder2Geometry = new THREE.CylinderGeometry( radius, radius, length, 20, 20);
    var cylinder2 = new THREE.Mesh(cylinder2Geometry, material);
    torus.add(cylinder2);
    cylinder2.rotation.z = Math.PI/2;
    cylinder2.position.set(-length/2+0.001,radius1,0);
    maniglia.add(cylinder1);
    var sphereGeometry = new THREE.SphereGeometry(radius,20,20,0,Math.PI);
    var sphere = new THREE.Mesh(sphereGeometry,material);
    cylinder2.add(sphere);
    sphere.rotation.x = -Math.PI/2;
    sphere.position.set(0,length/2-0.001,0);
    return maniglia;
}