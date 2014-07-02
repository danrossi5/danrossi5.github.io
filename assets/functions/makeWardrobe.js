function createWardrobe(bx,by,h,spessore,manigliax,manigliay,isHalf) {
	var wardrobe = new THREE.Object3D();
	var baseGeometry = new THREE.BoxGeometry(bx,spessore,by);
	var baseMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
	var base = createMesh(baseGeometry,"wood-2.jpg",1,1);
	var base1 = createMesh(baseGeometry,"wood-2.jpg",1,1);
	base.position.set(bx/2,spessore/2,by/2);
	base1.position.set(bx/2,spessore/2+h,by/2);

	var pareteGeometry = new THREE.BoxGeometry(spessore,h,by);
	var parete = createMesh(pareteGeometry,"wood-2.jpg",1,1);
	var parete1 = createMesh(pareteGeometry,"wood-2.jpg",1,1);
	parete.position.set(spessore/2,spessore+h/2,by/2);
	parete1.position.set(bx-spessore/2,spessore+h/2,by/2);

	var backGeometry = new THREE.BoxGeometry(bx,h,spessore);
	var back = createMesh(backGeometry,"wood-2.jpg",1,1);
	back.position.set(bx/2,spessore+h/2,spessore/2);

	var hook1 = new THREE.Object3D();
	var hook2 = new THREE.Object3D();
	var frontGeometry = new THREE.BoxGeometry(bx/2-bx/100,h,spessore);
	var front1 = createMesh(frontGeometry,"wood-2.jpg",1,1);
	front1.position.set(bx/4,h/2+spessore/2,-spessore/2);
	hook1.position.set(0,0,by);
	hook1.add(front1);
	front1.open = false;
	front1.interact = function () {
        if(!front1.open) {
            var movTween1 = new TWEEN.Tween(hook1.rotation)
                .to({ y: -Math.PI/2 }, 1000)
                .start();
            front1.open = true;
        }
        else {
            var movTween1 = new TWEEN.Tween(hook1.rotation)
                .to({ y: 0 }, 1000)
                .start();
            front1.open = false;
        }
    }
	var front2 = createMesh(frontGeometry,"wood-2.jpg",1,1);
	front2.position.set(bx/4,h/2+spessore/2,spessore/2);
	hook2.rotation.y = Math.PI;
	hook2.position.set(bx,0,by);
	hook2.add(front2);
	front2.open = false;
	front2.interact = function () {
        if(!front2.open) {
            var movTween2 = new TWEEN.Tween(hook2.rotation)
                .to({ y: 3*Math.PI/2 }, 1000)
                .start();
            front2.open = true;
        }
        else {
            var movTween1 = new TWEEN.Tween(hook2.rotation)
                .to({ y: Math.PI }, 1000)
                .start();
            front2.open = false;
        }
    }

	var maniglia = new THREE.Object3D();

	var maniglia1Geometry = new THREE.CylinderGeometry( manigliax, manigliax, manigliay, 8, 8);
	var maniglia1Material = new THREE.MeshBasicMaterial( {color: 0x4169E1} );
	var maniglia11 = new THREE.Mesh(maniglia1Geometry, maniglia1Material);
	var maniglia12 = new THREE.Mesh(maniglia1Geometry, maniglia1Material);
	if (isHalf===undefined) {
		maniglia11.position.set(0.4*bx/2,0,0.03);
		maniglia12.position.set(0.4*bx/2,0,-0.03);
	} else {
		maniglia11.position.set(0.4*bx/2,-0.9*h/2,0.03);
		maniglia12.position.set(0.4*bx/2,-0.9*h/2,-0.03);
	}
	maniglia11.rotation.x = Math.PI/2;
	maniglia12.rotation.x = Math.PI/2;

	var maniglia2Geometry = new THREE.BoxGeometry(manigliay,manigliay,5*manigliax);
	var maniglia21 = new THREE.Mesh(maniglia2Geometry, maniglia1Material);
	var maniglia22 = new THREE.Mesh(maniglia2Geometry, maniglia1Material);
	maniglia11.add(maniglia21);
	maniglia21.position.set(0,0.8*manigliay,0);
	maniglia12.add(maniglia22);
	maniglia22.position.set(0,-0.8*manigliay,0);
	
    toIntersect.push(front1);
    toIntersect.push(front2);
	front1.add(maniglia11);
	front2.add(maniglia12);
	wardrobe.add(base);
	wardrobe.add(base1);
	wardrobe.add(parete);
	wardrobe.add(parete1);
	wardrobe.add(back);
	wardrobe.add(hook1);
	wardrobe.add(hook2);
	wardrobe.rotation.x = Math.PI/2;
	wardrobe.rotation.y = -Math.PI/2;
	return wardrobe;
}

function makeWardrobes() {
	var wardrobes = new THREE.Object3D();
	var wardrobe1 = createWardrobe(1.4,0.5,2.2,0.05,0.01,0.02);
	wardrobe1.position.set(10.25,9.6,0.4);
	var wardrobe2 = createWardrobe(1.3,0.5,1.1,0.05,0.01,0.02,true);
	wardrobe2.position.set(10.25,8.19,1.5);
	var wardrobe3 = createWardrobe(1.4,0.5,2.2,0.05,0.01,0.02);
	wardrobe3.position.set(10.25,6.88,0.4);
	wardrobes.add(wardrobe1);
	wardrobes.add(wardrobe2);
	wardrobes.add(wardrobe3);
	return wardrobes;
}