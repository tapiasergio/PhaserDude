import Phaser from "phaser";

class Escena extends Phaser.Scene{

    platforms = null;

    preload() {
        this.load.image('sky', 'img/sky.png');
        this.load.image('grfound', 'img/platform.png');
        this.load.image('star', 'img/star.png');
        this.load.image('bomb', 'img/bomb.png');

    }
}
export default Escena;