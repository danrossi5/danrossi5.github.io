function createPavimento() {
	var offset =4.2;
	
	var pavimento = new THREE.Object3D();

	var bagno1 = createMesh(new THREE.BoxGeometry(4.1,6.1,0.36), "pavimento2.jpg",4,5);
  	pavimento.add(bagno1);
  	bagno1.position.set(2.25,3.25+offset,0.18);

	var bagno2 = createMesh(new THREE.BoxGeometry(4,6.1,0.36), "pavimentoBagno.jpg",4,5);
	pavimento.add(bagno2);
	bagno2.position.set(12.3,3.25+offset,0.18);

	var camera1 = createMesh(new THREE.BoxGeometry(6,6.1,0.36), "parquet1.jpg",8,8);
	pavimento.add(camera1);
	camera1.position.set(7.3,3.25+offset,0.18);

	var camera2 = createMesh(new THREE.BoxGeometry(5.3,7.1,0.36), "parquet1.jpg",8,8);
	pavimento.add(camera2);
	camera2.position.set(16.95,9.85+offset,0.18);

	var camera3 = createMesh(new THREE.BoxGeometry(5.3,6.1,0.36), "parquet1.jpg",8,8);
	pavimento.add(camera3);
	camera3.position.set(16.95,3.25+offset,0.18);

	var corridoio = createMesh(new THREE.BoxGeometry(13.8,7.2,0.36), "parq01.jpg",6,6);
	pavimento.add(corridoio);
	corridoio.position.set(7.4,9.9+offset,0.18);

	var camerapranzo = createMesh(new THREE.BoxGeometry(10.1,8,0.36), "parq01.jpg",6,6);
	pavimento.add(camerapranzo);
	camerapranzo.position.set(5.25,17.5+offset,0.18);

	var cucina = createMesh(new THREE.BoxGeometry(4,8,0.36), "piastrelle012.jpg",3,6);
	pavimento.add(cucina);
	cucina.position.set(12.3,17.5+offset,0.18);

	return pavimento;

}