function createMesh(geom, imageFile, x, y, bump) {
  var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + imageFile)
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(x,y);
  var mat = new THREE.MeshPhongMaterial();
  mat.map = texture;
  

  if (bump) {
    var bump = THREE.ImageUtils.loadTexture("assets/textures/general/" + bump)
    mat.bumpMap = bump;
    mat.bumpScale = 0.2;
  }

  var mesh = new THREE.Mesh(geom, mat);

  return mesh;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function createParticles(particleCount,texture,size,offset,px,py,pz,isStar) {
  var zOffset =0;
  var yOffset = offset/2;
  var pMaterial = new THREE.ParticleBasicMaterial({color: 0xFFFFFF,size: size, map: THREE.ImageUtils.loadTexture("assets/textures/general/"+texture), transparent: true});
  if (isStar) {
    var pMaterial = new THREE.ParticleBasicMaterial({color: 0xFFFFFF,size: size, map: THREE.ImageUtils.loadTexture("assets/textures/general/"+texture), blending: THREE.AdditiveBlending
      , transparent: true});
    yOffset = offset;
    zOffset = offset;
  }
  var particles = new THREE.Geometry();
  var x = 0;
  for(var p = 0; p < particleCount; p++) {
    var pX = px-Math.random()*offset,pY = py-Math.random()*yOffset,pZ=pz-Math.random()*zOffset, particle = new THREE.Vector3(pX, pY, pZ);
    particle.velocity = new THREE.Vector3(0,-Math.random(),0);
    particles.vertices.push(particle);
  }
  var particleSystem = new THREE.ParticleSystem(particles,pMaterial);
  particleSystem.sortParticles = true;
  return particleSystem;
}

function mkJoint (radius, height,sphereColor,lampColor) {
  var joint = new THREE.Object3D();
  var sphereGeometry = new THREE.SphereGeometry(radius, 32, 32);
  var sphereMaterial = new THREE.MeshPhongMaterial({color: sphereColor, shininess: 3, shading: THREE.FlatShading, metal : true});
  var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(0, 0, 0);
  sphere.castShadow = true;
  joint.add(sphere);

  var cylinderGeometry = new THREE.CylinderGeometry(radius, radius, height, 32, 32, false);
  var cylinderMaterial = new THREE.MeshPhongMaterial({color: lampColor, shininess: 3, shading: THREE.FlatShading, metal: true});
  var cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  cylinder.position.set(0, height / 2 + radius, 0);
  cylinder.castShadow = true;
  sphere.add(cylinder);

  var hook = new THREE.Object3D();
  hook.position.set(0, height/2+radius, 0);
  cylinder.add(hook);

  joint.sphere = sphere;
  joint.cylinder = cylinder;
  joint.hook = hook;

  return joint;
}

function makeFrame(img) {
  var plane = createBumpMesh(new THREE.BoxGeometry(6,4,0.2), "frame.jpg", "frame-bump.jpg");

  plane.rotation.x=-0.5*Math.PI;
  plane.position.set(0,0,0);

  var image = createBumpMesh(new THREE.BoxGeometry(4.7,2.75,0.01), img);
  image.rotation.x=-0.5*Math.PI;
  image.rotation.z = Math.PI;
  image.position.set(0,-0.1,0);

  var frame = new THREE.Object3D();
  frame.add(plane);
  frame.add(image);
  
  function createBumpMesh(geom, imageFile, bump) {
    var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + imageFile)
    geom.computeVertexNormals();
    var mat = new THREE.MeshPhongMaterial();
    mat.map = texture;

    if (bump) {
      var bump = THREE.ImageUtils.loadTexture("assets/textures/general/" + bump)
      mat.bumpMap = bump;
      mat.bumpScale = 0.2;
    }

    var mesh = new THREE.Mesh(geom, mat);

    return mesh;
  }
  return frame;
};

function initStats() {
  var stats = new Stats();
  stats.setMode(0); // 0: fps, 1: ms
  $('body').append(stats.domElement);
  return stats;
}