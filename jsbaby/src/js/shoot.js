

shoot = function (game) {
    this.scene = game.scene;

var impact = BABYLON.Mesh.CreatePlane("impact", 1, this.scene);

impact.material = new BABYLON.StandardMaterial("impactMat", scene);
impact.material.diffuseTexture = new BABYLON.Texture("BabylonjsCONCOURS/jsbaby/src/assets/impact.jpg", this.scene);
impact.material.diffuseTexture.hasAlpha = true;
impact.position = new BABYLON.Vector3(0, 0, -0.1);

scene.onPointerDown = function (evt, pickResult) {
    // if the click hits the ground object, we change the impact position
    if (pickResult.hit) {
        impact.position.x = pickResult.pickedPoint.x;
        impact.position.y = pickResult.pickedPoint.y;
    }
}
}