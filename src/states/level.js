ProEvolutionQuidditch.levelState = function(game) {

}
var puntuacionH;
var puntuacionD;

var player1;
var player2;

var snitch;

ProEvolutionQuidditch.levelState.prototype = {

    preload: function() {

    },

    create: function() {
        game.add.sprite(0,0,'stadium1');

        if(ProEvolutionQuidditch.numPlayer == 2){
            var griffindor = game.add.sprite(10,10,'griffindor');
            griffindor.scale.setTo(0.5,0.5);

            var slytherin = game.add.sprite(710,10,'slytherin');
            slytherin.scale.setTo(0.5,0.5);

            player1 = new Player(game.add.sprite(200, 300, 'harry'), game.add.text(100, 20, 0), 1);

            player2 = new Player(game.add.sprite(400, 300, 'draco'), game.add.text(690, 20, 0), 2);
        }else{
            var griffindor = game.add.sprite(10,10,'griffindor');
            griffindor.scale.setTo(0.5,0.5);

            player1 = new Player(game.add.sprite(200, 300, 'harry'), game.add.text(100, 20, 0), 1);
        }

        snitch = game.add.sprite(500, 500, 'snitch');
        snitch.scale.setTo(0.5, 0.5);

        game.physics.enable(snitch, Phaser.Physics.ARCADE);
    },

    update: function() {
        if(ProEvolutionQuidditch.numPlayer == 2){
            player1.moverPlayer();
            player2.moverPlayer();
            
            game.physics.arcade.collide(player1.sprite, snitch, function(){this.collisionHandler(player1)}, null, this);
            game.physics.arcade.collide(player2.sprite, snitch, function(){this.collisionHandler(player2)}, null, this);
        }else{
            player1.moverPlayer();
            game.physics.arcade.collide(player1.sprite, snitch, function(){this.collisionHandler(player1)}, null, this);
        }
    },

    collisionHandler: function(player, snitch) {
        player.puntos++;
        player.puntuacion.text = player.puntos;
        if(player.puntos >= 3){
            game.state.start('endingState');
        }else{
            snitch.x = Math.floor(Math.random() * game.width - snitch.width/2);
            snitch.y = Math.floor(Math.random() * game.height - snitch.height/2);
        }
    }
}

