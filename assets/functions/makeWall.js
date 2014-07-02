function makeWalls() {
	var walls = new THREE.Object3D();
	var height = 3.2;
	var offset = 4.7;
	var spessore = 0.01;

	// muri bagno1
	var textureBagno1 = "mosaico.jpg";
	var wallBagno11 = makeHole(spessore,textureBagno1,false,3.8,height,1.5,1,0.8,1.4);
	wallBagno11.position.set(0.5,0.01+offset,0.3);
	var wallBagno12 = makeHole(spessore,textureBagno1,true,5.8,height);
	wallBagno12.position.set(0.5,offset,0.3);
	var wallBagno13 = makeHole(spessore,textureBagno1,false,3.8,height,1.4,0,1,2.2);
	wallBagno13.position.set(0.5,5.8+offset,0.3);
	var wallBagno14 = makeHole(spessore,textureBagno1,true,5.8,height);
	wallBagno14.position.set(4.29,offset,0.3);

	//muri camera1
	var textureCamera1 = "plaster-diffuse.jpg";
	var wallCamera11 = makeHole(spessore,textureCamera1,false,5.8,height,2.1,0,1.6,2.2);
	wallCamera11.position.set(4.5,0.01+offset,0.3);
	var wallCamera12 = makeHole(spessore,textureCamera1,true,5.8,height);
	wallCamera12.position.set(4.5,offset,0.3);
	var wallCamera13 = makeHole(spessore,textureCamera1,false,5.8,height,1.3,0,1,2.2);
	wallCamera13.position.set(4.5,5.8+offset,0.3);
	var wallCamera14 = makeHole(spessore,textureCamera1,true,5.8,height);
	wallCamera14.position.set(10.29,offset,0.3);

	//muri corridoio1
	var textureCorridoio1 = "cartaparati1.jpg";
	var wallCorridoio11 = makeHole(spessore,textureCorridoio1,false,9.8,height,1.4,0,1,2.2,5.3,0,1,2.2);
	wallCorridoio11.position.set(0.5,6.01+offset,0.3);
	var wallCorridoio12 = makeHole(spessore,textureCorridoio1,true,6.8,height,1.8,0,3,2.2);
	wallCorridoio12.position.set(0.5,6.1+offset,0.3);
	var wallCorridoio13 = makeHole(spessore,textureCorridoio1,false,9.8,height,5.9,0,2,2.2);
	wallCorridoio13.position.set(0.5,12.8+offset,0.3);
	var wallCorridoio14 = makeHole(spessore,textureCorridoio1,true,6.8,height,2.4,0,2,2.2);
	wallCorridoio14.position.set(10.29,6+offset,0.3);

	//muri cameraPranzo
	var textureCameraPranzo = "plaster-diffuse.jpg";
	var wallCameraPranzo1 = makeHole(spessore,textureCameraPranzo,false,9.8,height,5.9,0,2,2.2);
	wallCameraPranzo1.position.set(0.5,13.01+offset,0.3);
	var wallCameraPranzo2 = makeHole(spessore,textureCameraPranzo,true,7.8,height);
	wallCameraPranzo2.position.set(0.5,13+offset,0.3);
	var wallCameraPranzo3 = makeHole(spessore,textureCameraPranzo,false,9.8,height,6,1,1.8,1.4);
	wallCameraPranzo3.position.set(0.5,20.8+offset,0.3);
	var wallCameraPranzo4 = makeHole(spessore,textureCameraPranzo,true,7.8,height);
	wallCameraPranzo4.position.set(10.29,13.+offset,0.3);

	//muri bagno2
	var textureBagno2 = "piastrelle_bianche.jpg";
	var wallBagno21 = makeHole(spessore,textureBagno2,false,3.8,height,1.3,1,0.9,1.4);
	wallBagno21.position.set(10.5,0.01+offset,0.3);
	var wallBagno22 = makeHole(spessore,textureBagno2,true,5.8,height);
	wallBagno22.position.set(10.5,offset,0.3);
	var wallBagno23 = makeHole(spessore,textureBagno2,false,3.8,height);
	wallBagno23.position.set(10.5,5.8+offset,0.3);
	var wallBagno24 = makeHole(spessore,textureBagno2,true,5.8,height,1.4,0,1,2.2);
	wallBagno24.position.set(14.29,offset,0.3);

	//muri corridoio2
	var textureCorridoio2 = "cartaparati1.jpg";
	var wallCorridoio21 = makeHole(spessore,textureCorridoio2,false,3.8,height);
	wallCorridoio21.position.set(10.5,6.01+offset,0.3);
	var wallCorridoio22 = makeHole(spessore,textureCorridoio2,true,6.8,height,2.4,0,2,2.2);
	wallCorridoio22.position.set(10.5,6+offset,0.3);
	var wallCorridoio23 = makeHole(spessore,textureCorridoio2,false,3.8,height,1.4,0,1,2.2);
	wallCorridoio23.position.set(10.5,12.8+offset,0.3);
	var wallCorridoio24 = makeHole(spessore,textureCorridoio2,true,6.8,height,4.3,0,1,2.2);
	wallCorridoio24.position.set(14.29,6+offset,0.3);

	//muri cucina
	var textureCucina = "wall1.jpg";
	var wallCucina1 = makeHole(spessore,textureCucina,false,3.8,height,1.4,0,1,2.2);
	wallCucina1.position.set(10.5,13.01+offset,0.3);
	var wallCucina2 = makeHole(spessore,textureCucina,true,7.8,height);
	wallCucina2.position.set(10.5,13+offset,0.3);
	var wallCucina3 = makeHole(spessore,textureCucina,false,3.8,height,1.3,1,1.2,1.4);
	wallCucina3.position.set(10.5,20.8+offset,0.3);
	var wallCucina4 = makeHole(spessore,textureCucina,true,7.8,height);
	wallCucina4.position.set(14.29,13+offset,0.3);

	//muri camera2
	var textureCamera2 = "cartaparati2.jpg";
	var wallCamera21 = makeHole(spessore,textureCamera2,false,4.8,height,1.9,0,1,2.2);
	wallCamera21.position.set(14.5,6.01+offset,0.3);
	var wallCamera22 = makeHole(spessore,textureCamera2,true,6.8,height,4.3,0,1,2.2);
	wallCamera22.position.set(14.5,6+offset,0.3);
	var wallCamera23 = makeHole(spessore,textureCamera2,false,4.8,height);
	wallCamera23.position.set(14.5,12.8+offset,0.3);
	var wallCamera24 = makeHole(spessore,textureCamera2,true,6.8,height,1.6,1,1.5,1.4);
	wallCamera24.position.set(19.29,6+offset,0.3);

	//muri camera3
	var textureCamera3 = "whiteTexture.jpg";
	var wallCamera31 = makeHole(spessore,textureCamera3,false,4.8,height);
	wallCamera31.position.set(14.5,0.01+offset,0.3);
	var wallCamera32 = makeHole(spessore,textureCamera3,true,5.8,height,1.4,0,1,2.2);
	wallCamera32.position.set(14.5,0.01+offset,0.3);
	var wallCamera33 = makeHole(spessore,textureCamera3,false,4.8,height,1.9,0,1,2.2);
	wallCamera33.position.set(14.5,5.8+offset,0.3);
	var wallCamera34 = makeHole(spessore,textureCamera3,true,5.8,height,1.9,1,1.2,1.4);
	wallCamera34.position.set(19.29,0.01+offset,0.3);

	//muriesterni
	var textureEsterno = "stone.jpg";
	var heightEsterno = 3.5;
	var spessoreEsterno = 0.1;
	var wallEsterno1 = makeHole(spessoreEsterno,textureEsterno,true,21.9,heightEsterno,8.4,0.3,3,2.2);
	wallEsterno1.position.set(-0.1,4.2,0);
	var wallEsterno2 = makeHole(spessoreEsterno,textureEsterno,false,14.5,heightEsterno,6.5,1.3,1.8,1.4,11.8,1.3,1.2,1.4);
	wallEsterno2.position.set(0.0,26.1,0);
	var wallEsterno3 = makeHole(spessoreEsterno,textureEsterno,true,8.4,heightEsterno);
	wallEsterno3.position.set(14.5,17.7,0);
	var wallEsterno4 = makeHole(spessoreEsterno,textureEsterno,false,5.2,heightEsterno);
	wallEsterno4.position.set(14.6,17.8,0);
	var wallEsterno5 = makeHole(spessoreEsterno,textureEsterno,true,13.6,heightEsterno,2.4,1.3,1.2,1.4,8.1,1.3,1.5,1.4);
	wallEsterno5.position.set(19.8,4.2,0);
	var wallEsterno6 = makeHole(spessoreEsterno,textureEsterno,false,20,heightEsterno,2.1,1.3,0.8,1.4,6.7,0,1.6,2.5,11.9,1.3,0.9,1.4);
	wallEsterno6.position.set(-0.1,4.2,0);
	var wallEsterno7 = makeHole(spessoreEsterno,textureEsterno,false,6.2,1.725);
	wallEsterno7.position.set(4.3,0,0);
	var wallEsterno8 = makeHole(spessoreEsterno,textureEsterno,true,4.3,1.725);
	wallEsterno8.position.set(4.2,-0.1,0);
	var wallEsterno9 = makeHole(spessoreEsterno,textureEsterno,true,4.3,1.725);
	wallEsterno9.position.set(10.5,-0.1,0);

	walls.add(wallBagno11);
	walls.add(wallBagno12);
	walls.add(wallBagno13);
	walls.add(wallBagno14);
	walls.add(wallCamera11);
	walls.add(wallCamera12);
	walls.add(wallCamera13);
	walls.add(wallCamera14);
	walls.add(wallCorridoio11);
	walls.add(wallCorridoio12);
	walls.add(wallCorridoio13);
	walls.add(wallCorridoio14);
	walls.add(wallCameraPranzo1);
	walls.add(wallCameraPranzo2);
	walls.add(wallCameraPranzo3);
	walls.add(wallCameraPranzo4);
	walls.add(wallBagno21);
	walls.add(wallBagno22);
	walls.add(wallBagno23);
	walls.add(wallBagno24);
	walls.add(wallCorridoio21);
	walls.add(wallCorridoio22);
	walls.add(wallCorridoio23);
	walls.add(wallCorridoio24);
	walls.add(wallCucina1);
	walls.add(wallCucina2);
	walls.add(wallCucina3);
	walls.add(wallCucina4);
	walls.add(wallCamera21);
	walls.add(wallCamera22);
	walls.add(wallCamera23);
	walls.add(wallCamera24);
	walls.add(wallCamera31);
	walls.add(wallCamera32);
	walls.add(wallCamera33);
	walls.add(wallCamera34);
	walls.add(wallEsterno1);
	walls.add(wallEsterno2);
	walls.add(wallEsterno3);
	walls.add(wallEsterno4);
	walls.add(wallEsterno5);
	walls.add(wallEsterno6);
	walls.add(wallEsterno7);
	walls.add(wallEsterno8);
	walls.add(wallEsterno9);
	return walls;
}

function makeHole(spessore,texture,toRotate,b,h,hx,hz,offX,offZ,hx1,hz1,offX1,offZ1,hx2,hz2,offX2,offZ2) {
	var dimMax = 22;
	b = b/dimMax;
	h= h/dimMax;
	
	var options = {amount: spessore,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
	var shape = new THREE.Shape();
	shape.moveTo(0,0);
	shape.lineTo(b,0);
	shape.lineTo(b,h);
	shape.lineTo(0,h);

	if(hx!==undefined) {
		hx = hx/dimMax;
		if (hz>0)
			hz = hz/dimMax;
		offX = offX/dimMax;
		offZ = offZ/dimMax;
		var hole = new THREE.Path();
		hole.moveTo(hx,hz);
		hole.lineTo(hx+offX,hz);
		hole.lineTo(hx+offX,hz+offZ);
		hole.lineTo(hx,hz+offZ);
		shape.holes.push(hole);
	}
	if(hx1!==undefined) {
		hx1 = hx1/dimMax;
		if (hz1>0)
			hz1 = hz1/dimMax;
		offX1 = offX1/dimMax;
		offZ1 = offZ1/dimMax;
		var hole1 = new THREE.Path();
		hole1.moveTo(hx1,hz1);
		hole1.lineTo(hx1+offX1,hz1);
		hole1.lineTo(hx1+offX1,hz1+offZ1);
		hole1.lineTo(hx1,hz1+offZ1);
		shape.holes.push(hole1);
	}
	if(hx2!==undefined) {
		hx2 = hx2/dimMax;
		if (hz2>0)
			hz2 = hz2/dimMax;
		offX2 = offX2/dimMax;
		offZ2 = offZ2/dimMax;
		var hole2 = new THREE.Path();
		hole2.moveTo(hx2,hz2);
		hole2.lineTo(hx2+offX2,hz2);
		hole2.lineTo(hx2+offX2,hz2+offZ2);
		hole2.lineTo(hx2,hz2+offZ2);
		shape.holes.push(hole2);
	}
	var wallGeometry = new THREE.ExtrudeGeometry( shape, options );
	var wall = createMesh(wallGeometry,texture,10,10);
	wall.rotation.x = Math.PI/2;
	if(toRotate) 
		wall.rotation.y = Math.PI/2;
	wall.scale.set(dimMax,dimMax,1);
	return wall;
}