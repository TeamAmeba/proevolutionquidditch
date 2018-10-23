timer = 0;
ProEvolutionQuidditch.introState = function(game) {
    
}

ProEvolutionQuidditch.introState.prototype = {

    preload: function() {
        game.load.image('background', 'assets/images/background/background2.png');
        game.load.image('photo', 'assets/images/referee.png');
        game.load.image('text', 'assets/images/text/cleangame.png');
    },

    create: function() {
        game.add.sprite(0,0, 'background');
        sprite= game.add.sprite(280,60,'photo');
        text = game.add.sprite(400,450, 'text');
        text.anchor.setTo(0.5,0.5);
        text.scale.setTo(0.5,0.5);
    },

    update: function() {
        timer += game.time.elapsed;
        if (timer >= 400){
            timer -= 400;
            text.visible = !text.visible;
        }

        if (game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)){
            game.state.start('levelState');
        }

    }
}