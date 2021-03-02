var config = {

    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1000 },
            debug: false,
            fps: 60
        },
    },
    input: {
        gamepad: true
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }

};


function preload(){}
function create(){
function update(){
    this.add.text(0, 0, 'Hello World', { font: '"Press Start 2P"' });

 this.scene.start('Game');
}
    