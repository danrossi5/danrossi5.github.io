function mesh(bx,by,h,texture,flag,isDouble,material) {
    var geometry = new THREE.BoxGeometry(bx,by,h);
    var mesh;
    if (material===undefined)
        mesh = createMesh(geometry, texture,4,4);
    else {
        mesh = new THREE.Mesh(geometry, material);
    }
    mesh.open = false;
    var angle = -Math.PI/2;
    if (!flag && isDouble)
        angle = 3*Math.PI/2;
    else if (flag)
        angle = Math.PI/2;
    mesh.interact = function () {
        if(!mesh.open) {
            var movTween1 = new TWEEN.Tween(mesh.parent.rotation)
                .to({ z: angle }, 1000)
                .start();
            mesh.open = true;
        }
        else {
            if(isDouble) {
                var movTween1 = new TWEEN.Tween(mesh.parent.rotation)
                    .to({ z: Math.PI }, 1000)
                    .start();
            } else {
                var movTween1 = new TWEEN.Tween(mesh.parent.rotation)
                    .to({ z: 0 }, 1000)
                    .start();
            }
            mesh.open = false;
        }
    }
    mesh.position.set(bx/2,0,h/2);
    toIntersect.push(mesh);
    return mesh;
}

function meshBagno(bx,by,h,texture,flag,material) {
    var geometry = new THREE.BoxGeometry(bx,by,h);
    var mesh;
    if (material===undefined)
        mesh = createMesh(geometry, texture,4,4);
    else {
        mesh = new THREE.Mesh(geometry, material);
    }
    mesh.open = false;
    var angle = -Math.PI/9;
    if (flag)
        angle = Math.PI/9;
    mesh.interact = function () {
        if(!mesh.open) {
            var movTween1 = new TWEEN.Tween(mesh.parent.rotation)
                .to({ x: -angle }, 1000)
                .easing(TWEEN.Easing.Bounce.Out)
                .start();
            mesh.open = true;
        }
        else {
            var movTween1 = new TWEEN.Tween(mesh.parent.rotation)
                .to({ x: 0 }, 1000)
                .easing(TWEEN.Easing.Bounce.Out)
                .start();
            mesh.open = false;
        }
    }
    mesh.position.set(bx/2,0,h/2);
    toIntersect.push(mesh);
    return mesh;
}

function createWindow(bx,by,h,texture,flag,isDouble,isBagno) {
    var hook = new THREE.Object3D();
    var vetroX = bx-2*bx/10;
    var vetroH = h-2*h/10;
    var subMaterial = new THREE.MeshPhongMaterial({ambient: 0xffffff, color: 0xffffff, shininess: 100, shading: THREE.FlatShading, opacity : 0.1, transparent : true});
    if(isBagno!== undefined) {
        var infisso1 = meshBagno(bx,by,h/10,texture,flag);
        var infisso2 = meshBagno(bx/10,by,vetroH,texture,flag);
        var infisso3 = meshBagno(bx,by,h/10,texture,flag);
        var infisso4 = meshBagno(bx/10,by,vetroH,texture,flag);
        var subVetro = meshBagno(vetroX,by,vetroH,0,flag,subMaterial);
    }
    else {
        var infisso1 = mesh(bx,by,h/10,texture,flag,isDouble);
        var infisso2 = mesh(bx/10,by,vetroH,texture,flag,isDouble);
        var infisso3 = mesh(bx,by,h/10,texture,flag,isDouble);
        var infisso4 = mesh(bx/10,by,vetroH,texture,flag,isDouble);
        var subVetro = mesh(vetroX,by,vetroH,0,flag,isDouble,subMaterial);
    }
    infisso2.position.set(bx/20,0,vetroH/2+h/10);
    infisso3.position.set(bx/2,0,h-h/20);
    infisso4.position.set(bx-bx/20,0,h/2);
    hook.add(infisso1);
    hook.add(infisso2);
    hook.add(infisso3);
    hook.add(infisso4);
    hook.add(subVetro);
    subVetro.position.set(vetroX/2+bx/10,0,vetroH/2+h/10);
    return hook;
}

function createDoubleWindow(bx,by,h,texture,flag,otherAxis) {
    var finestra = new THREE.Object3D();
    var window1 = createWindow(bx/2,by,h,texture,flag,false);
    var window2 = createWindow(bx/2,by,h,texture,flag,true);
    window2.rotation.z = Math.PI;
    window2.position.set(bx,0,0);
    finestra.add(window1);
    finestra.add(window2);
    if(otherAxis)
        finestra.rotation.z = Math.PI/2;
    return finestra;
}

function makeWindows(floorHeight,spessore) {
    var texture = "legnoporte1.jpg";
    var windows = new THREE.Object3D();
    var finestraBagno1 = createWindow(0.8,spessore,1.4,texture,true,false,true);
    finestraBagno1.position.set(2,4.4,1+floorHeight);
    windows.add(finestraBagno1);

    var finestraCamera1 = createDoubleWindow(1.6,spessore,2.2,texture,true,false);
    finestraCamera1.position.set(6.6,4.4,floorHeight);
    windows.add(finestraCamera1);

    var finestraCameraPranzo = createDoubleWindow(1.8,spessore,1.4,texture,false,false);
    finestraCameraPranzo.position.set(6.5,25.8,1+floorHeight);
    windows.add(finestraCameraPranzo);

    var finestraBagno2 = createWindow(0.9,spessore,1.4,texture,true,false,true);
    finestraBagno2.position.set(11.8,4.4,1+floorHeight);
    windows.add(finestraBagno2);

    var finestraCucina = createDoubleWindow(1.2,spessore,1.4,texture,false,false);
    finestraCucina.position.set(11.8,25.8,1+floorHeight);
    windows.add(finestraCucina);

    var finestraCamera3 = createDoubleWindow(1.2,spessore,1.4,texture,true,true);
    finestraCamera3.position.set(19.6,6.6,1+floorHeight);
    windows.add(finestraCamera3);

    var finestraCamera2 = createDoubleWindow(1.5,spessore,1.4,texture,true,true);
    finestraCamera2.position.set(19.6,12.3,1+floorHeight);
    windows.add(finestraCamera2);
    return windows;
}