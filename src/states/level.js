ProEvolutionQuidditch.levelState = function(game) {

}
var puntuacion;
var puntos;

var player;

var upKey;
var downKey;
var leftKey;
var rightKey;

var snitch;

ProEvolutionQuidditch.levelState.prototype = {

    preload: function() {

    },

    create: function() {
        game.add.sprite(0,0,'stadium1');

        puntos = 0;
        puntuacion = game.add.text(20, 20, "puntuacion: " + puntos);

        player = game.add.sprite(300, 300, 'harry');
        player.scale.setTo(0.5, 0.5);
        
        game.physics.enable(player, Phaser.Physics.ARCADE);

        upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

        snitch = game.add.sprite(500, 500, 'snitch');
        snitch.scale.setTo(0.5, 0.5);

        game.physics.enable(snitch, Phaser.Physics.ARCADE);
    },

    update: function() {
        if (upKey.isDown)
        {
            player.y-=5;
        }
        if (downKey.isDown)
        {
            player.y+=5;
        }

        if (leftKey.isDown)
        {
            player.x-=5;
            //player.scale.setTo(-0.5,0.5);
        }
        if (rightKey.isDown)
        {
            player.x+=5;
            //player.scale.setTo(0.5, 0.5);
        }

        game.physics.arcade.collide(player, snitch, collisionHandler, null, this);
    }

    
}

function collisionHandler (player, snitch) {
    puntos++;
    puntuacion.text = "puntuacion: " + puntos;
    if(puntos >= 3){
        game.state.start('endingState');
    }else{
        snitch.x = Math.floor(Math.random() * game.width - snitch.width/2);
        snitch.y = Math.floor(Math.random() * game.height - snitch.height/2);
    }
}
