var shootsuccess : boolean = false ;
var vector;
var firerate = 15;
//var dir = // un vecteur( x la pos de la cam, y de la souris , et z grand chiffre)


class shoot {
    constructor() {
        this.img = "image pistolet"
        this.nbbullet = 6;
        this.imgBullet = "image de balle"
    }


    update(){

        if (Input.click)
        tir();
    }


    tir(){
        //var raycast = new Ray(pos de la camera,dir);
        /*if (raycast. == ennmis)   {        tester la collision
            ennmis.hit();
            ennmis.die();

            
        }   */
        
    }
}