var timer = 0

ProEvolutionQuidditch.menuState = function(game) {
   
}

ProEvolutionQuidditch.menuState.prototype = {

    preload: function() {
        console.log("Estoy en menu")
    },

    create: function() {
        game.add.sprite(0, 0, 'background');

        start = game.add.sprite(150, 500, 'start');

        snitch = game.add.sprite(300, 50, 'snitch');
        snitch.scale.setTo(1.5, 1.5);

        title = game.add.sprite(400, 150, 'title');
        title.anchor.setTo(0.5, 0.5);
        title.scale.setTo(0.5, 0.5);

        game.add.sprite(325, 200, 'griffindor');
        game.add.sprite(50, 200, 'harry');

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
    }
}