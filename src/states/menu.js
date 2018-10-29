var timer = 0

ProEvolutionQuidditch.menuState = function(game) {
   
}

function changePlayers(){
        
}

ProEvolutionQuidditch.menuState.prototype = {

    preload: function() {
        console.log("Estoy en menu")
    },

    create: function() {
        game.add.sprite(0, 0, 'background');

        player1 = game.add.sprite(280, 460, 'player1');
        player2 = game.add.sprite(280, 460, 'player2');
        player2.visible = false;

        press1 = game.add.sprite(50, 400, 'press1');
        press1.visible = false;
        press2 = game.add.sprite(30, 400, 'press2');

        start = game.add.sprite(150, 530, 'start');

        snitch = game.add.sprite(300, 50, 'snitch');
        snitch.scale.setTo(1.5, 1.5);

        title = game.add.sprite(400, 150, 'title');
        title.anchor.setTo(0.5, 0.5);
        title.scale.setTo(0.5, 0.5);

        game.add.sprite(325, 200, 'griffindor');
        
        draco = game.add.sprite(50, 200, 'draco');
        draco.visible = !draco.visible;
        harry = game.add.sprite(750, 200, 'harry');
        harry.scale.x *= -1;
    },

    update: function() {

        timer += game.time.elapsed;
        if ( timer >= 400 ) { 
            timer -= 400;
            start.visible = !start.visible;
        }

        
        if (game.input.keyboard.isDown(Phaser.Keyboard.S))
        {
            game.state.start('introState');
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.TWO)){
            draco.visible = true;
            player2.visible = true;
            press1.visible = true;

            player1.visible = false;
            press2.visible = false;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.ONE)){
            draco.visible = false;
            player2.visible = false;
            press1.visible = false;

            player1.visible = true;
            press2.visible = true;
        }
    }

    

}