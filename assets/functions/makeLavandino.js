function makeRubinetto(radius,h1,radius1,acquaDimx,acquaDimy,acquaDimz,flag) {
  var color = "#D2D2D2";
  var rubinetto = new THREE.Object3D();
  var cylinder0Geometry = new THREE.CylinderGeometry( radius, radius, 0.35*h1, 20, 20);
  var material = new THREE.MeshPhongMaterial({color: color, metal:true});
  var cylinder0 = new THREE.Mesh(cylinder0Geometry, material);
  cylinder0.position.set(1.2*radius,0.6*h1,0);
  cylinder0.rotation.z=Math.PI/2;
  rubinetto.add(cylinder0)
  var cylinder1Geometry = new THREE.CylinderGeometry( radius, radius, h1, 20, 20);
  var cylinder1 = new THREE.Mesh(cylinder1Geometry, material);
  cylinder1.position.set(0,h1/2,0);
  rubinetto.add(cylinder1);
  var torusGeometry = new THREE.TorusGeometry( radius1, radius, 16, 10 , Math.PI);
  var torus = new THREE.Mesh(torusGeometry, material);
  cylinder1.add(torus);
  torus.position.set(-radius1,-h1/6-0.01,0);
  var hook = new THREE.Object3D();
  cylinder1.add(hook);
  var manopolaGeometry = new THREE.BoxGeometry(2*radius1,h1/10,2*radius);
  var manopola = new THREE.Mesh(manopolaGeometry, material);
  manopola.position.set(-0.73*radius1,h1/2,0);
  var cont = 0;
  var filoAcquaMaterial = new THREE.MeshPhongMaterial({color:0x3effdd, ambient:0xa7e5ff, emissive: 0xb1fffa, specular: 0x00eeff, transparent: true, opacity: 0.7});
  hook.add(manopola);
  if (flag) {
    var filoAcquaGeometry = new THREE.CylinderGeometry( 0.8*radius, 0.8*radius, 1.2*acquaDimy, 12, 12);
    var filoAcqua = new THREE.Mesh(filoAcquaGeometry, filoAcquaMaterial);
    filoAcqua.position.set(-2*radius1,0.12*acquaDimy,0);
  } else {
    var filoAcquaGeometry = new THREE.CylinderGeometry( 0.8*radius, 0.8*radius, 2*acquaDimy, 12, 12);
    var filoAcqua = new THREE.Mesh(filoAcquaGeometry, filoAcquaMaterial);
    filoAcqua.position.set(-2*radius1,0.35*acquaDimy,0);
  }
  filoAcqua.rotation.z= Math.PI;
  filoAcqua.scale.set(1,0.0001,1);
  rubinetto.add(filoAcqua);
  var boxAcquaMaterial = new THREE.MeshPhongMaterial({color:0x3effdd, ambient:0xa7e5ff, emissive: 0xb1fffa, specular: 0x00eeff, transparent: true, opacity: 0.7});
  if (flag) {
    var boxAcquaGeometry = new THREE.BoxGeometry(acquaDimx,1.2*acquaDimy,0.75*acquaDimz);
    var boxAcqua = new THREE.Mesh(boxAcquaGeometry, boxAcquaMaterial);
    boxAcqua.position.set(-0.5*acquaDimx,-1.2*acquaDimy,0);
  } else {
    var boxAcquaGeometry = new THREE.BoxGeometry(acquaDimx,acquaDimy,0.75*acquaDimz);
    var boxAcqua = new THREE.Mesh(boxAcquaGeometry, boxAcquaMaterial);
    boxAcqua.position.set(-0.5*acquaDimx,-2*acquaDimy,0);
  }
  boxAcqua.scale.set(1,0.0001,1);
  rubinetto.add(boxAcqua);
  toIntersect.push(manopola);
  manopola.interact = function() {
    cont = cont+1;
    if(cont%4===0) {
      var movTween1 = new TWEEN.Tween(hook.rotation)
      .to({ y: 0 }, 1000)
      .start();
      var movTween2 = new TWEEN.Tween(boxAcqua.scale)
      .to({ x: 1, y: 0.0001, z: 1 }, 5000)
      .start();
    }
    else if(cont%4===1) {
      var movTween1 = new TWEEN.Tween(hook.rotation)
      .to({ y: Math.PI/4 }, 1000)
      .start();
      var movTween2 = new TWEEN.Tween(filoAcqua.scale)
      .to({ x: 1, y: 1, z: 1 }, 1500)
      .start();
      if (flag) {
        var movTween3 = new TWEEN.Tween(filoAcqua.position)
        .to({ x: -2*radius1, y: -0.43*acquaDimy, z: 0 }, 1500)
        .start();
      } else {
        var movTween3 = new TWEEN.Tween(filoAcqua.position)
        .to({ x: -2*radius1, y: -0.65*acquaDimy, z: 0 }, 1500)
        .start();
      }
      var movTween5a = new TWEEN.Tween(filoAcqua.scale)
      .to({ x: 1, y: 0.0001, z: 1 }, 200);
      if (flag) {
        var movTween5b = new TWEEN.Tween(filoAcqua.position)
        .to({ x: -2*radius1, y: 0.12*acquaDimy, z: 0 }, 200);
      } else {
        var movTween5b = new TWEEN.Tween(filoAcqua.position)
        .to({ x: -2*radius1, y: 0.35*acquaDimy, z: 0 }, 200);
      }
      var movTween4 = new TWEEN.Tween(boxAcqua.scale)
        .to({ x: 1, y: 1.5, z: 1 }, 5000)
        .delay(500)
        .chain(movTween5a,movTween5b)
        .start();
    }else if(cont%4===2) {
      var movTween1 = new TWEEN.Tween(hook.rotation)
      .to({ y: 0 }, 1000)
      .start();
      var movTween2 = new TWEEN.Tween(boxAcqua.scale)
      .to({ x: 1, y: 0.0001, z: 1 }, 5000)
      .start();
    }
    else if(cont%4===3) {
      var movTween1 = new TWEEN.Tween(hook.rotation)
      .to({ y: -Math.PI/4 }, 1000)
      .start();
      var movTween2 = new TWEEN.Tween(filoAcqua.scale)
      .to({ x: 1, y: 1, z: 1 }, 2000)
      .start();
      if (flag) {
        var movTween3 = new TWEEN.Tween(filoAcqua.position)
        .to({ x: -2*radius1, y: -0.43*acquaDimy, z: 0 }, 2000)
        .start();
      } else {
        var movTween3 = new TWEEN.Tween(filoAcqua.position)
        .to({ x: -2*radius1, y: -0.65*acquaDimy, z: 0 }, 2000)
        .start();
      }
      var movTween5a = new TWEEN.Tween(filoAcqua.scale)
      .to({ x: 1, y: 0.0001, z: 1 }, 200);
      if (flag) {
        var movTween5b = new TWEEN.Tween(filoAcqua.position)
        .to({ x: -2*radius1, y: 0.12*acquaDimy, z: 0 }, 200);
      } else {
        var movTween5b = new TWEEN.Tween(filoAcqua.position)
        .to({ x: -2*radius1, y: 0.35*acquaDimy, z: 0 }, 200);
      }
      var movTween4 = new TWEEN.Tween(boxAcqua.scale)
        .to({ x: 1, y: 1.5, z: 1 }, 5000)
        .delay(500)
        .chain(movTween5a,movTween5b)
        .start();
    }
  }
  
  
  rubinetto.rotation.x = Math.PI/2;
  return rubinetto;
}

function createRubinetti() {
  var rubinetti = new THREE.Object3D();
  var rubinetto1 = makeRubinetto(0.025, 0.2, 0.075,0.7,0.5,2.3,true);
  rubinetto1.position.set(4.24,9.5,1.1);
  rubinetti.add(rubinetto1);
  var rubinetto2 = makeRubinetto(0.025, 0.2, 0.075,0.59,0.2,1.56,false);
  rubinetto2.position.set(4.24,7.3,1.8);
  rubinetti.add(rubinetto2);
  return rubinetti;
}