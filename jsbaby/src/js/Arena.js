
    Arena = function(game) {
    // Appel des variables nécessaires
    this.game = game;
    var scene = game.scene;
    // Création de notre lumière principale

    var light2 = new BABYLON.HemisphericLight("light2", new BABYLON.Vector3(0, -1, 0), scene);
    light2.intensity = 0.8;


    var materialGround = new BABYLON.StandardMaterial("groundTexture", scene);
    materialGround.diffuseTexture = new BABYLON.Texture("assets/water.png", scene);
    materialGround.diffuseTexture.uScale = 4.0;
    materialGround.diffuseTexture.vScale = 4.0;

    var ground = BABYLON.Mesh.CreateGround("ground1", 20, 20, 2, scene);
    ground.scaling = new BABYLON.Vector3(2,10,3);
    ground.scaling.z = 2;
    ground.material = materialGround;

    var materialBox = new BABYLON.StandardMaterial("boxTexture", scene);
    materialBox .diffuseTexture = new BABYLON.Texture("assets/stone.jpg", scene);
    materialBox .diffuseTexture.uScale = 4.0;
    materialBox .diffuseTexture.vScale = 4.0;

    //var materialGround = new BABYLON.StandardMaterial("groundTexture", scene);
    // SUR TOUS LES AXES Y -> On monte les meshes de la moitié de la hauteur du mesh en question.

    var polanskiText = new BABYLON.StandardMaterial("groundTexture", scene);
    polanskiText.diffuseTexture = new BABYLON.Texture("assets/polanski.jpg", scene);
    polanskiText.diffuseTexture.uScale = 4.0;
    polanskiText.diffuseTexture.vScale = 4.0;


    var boxArena = BABYLON.Mesh.CreateBox("box1", 100, scene, false, BABYLON.Mesh.BACKSIDE);
    boxArena.material = materialGround;
    boxArena.position.y = 50 * 0.3;
    boxArena.scaling.y = 0.3;
    boxArena.scaling.z = 0.8;
    boxArena.scaling.x = 3.5;
    boxArena.material = polanskiText;


    var columns = [];
    var numberColumn = 6;
    var sizeArena = 100*boxArena.scaling.x -50;
    var ratio = ((100/numberColumn)/100) * sizeArena;
    for (var i = 0; i <= 1; i++) {
        if(numberColumn>0){
            columns[i] = [];
            let mainCylinder = BABYLON.Mesh.CreateCylinder("cyl0-"+i, 30, 5, 5, 20, 4, scene);
            mainCylinder.position = new BABYLON.Vector3(-sizeArena/2,30/2,-20 + (40 * i));
            mainCylinder.material = materialBox;
            columns[i].push(mainCylinder);

            if(numberColumn>1){
                for (let y = 1; y <= numberColumn - 1; y++) {
                    let newCylinder = columns[i][0].clone("cyl"+y+"-"+i);
                    newCylinder.position = new BABYLON.Vector3(-(sizeArena/2) + (ratio*y),30/2,columns[i][0].position.z);
                    columns[i].push(newCylinder);
                }
            }
        }
    }


};