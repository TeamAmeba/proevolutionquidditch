var timer = 0;
ProEvolutionQuidditch.endingState = function(game) {

}

ProEvolutionQuidditch.endingState.prototype = {

    preload: function() {
        
    },

    create: function() {
        game.add.sprite(0,0,'background2');
        game.add.sprite(180,320,'winner');
        game.add.sprite(100,100,'griffindor');


        harry = game.add.sprite(640,180,'harry');
        harry.anchor.setTo(0.5, 0.5);
        harry.scale.setTo(-1, 1)

        game.add.sprite(330,30,'trophy');

        retrn = game.add.sprite(400,430,'return');
        retrn.anchor.setTo(0.5, 0.5);
        retrn.scale.setTo(0.5, 0.5);
    },

    update: function() {
        timer += game.time.elapsed;
        if ( timer >= 400 ) { 
            timer -= 400;
            retrn.visible = !retrn.visible;
        }

        if (game.input.keyboard.isDown(Phaser.Keyboard.S))
        {
            game.state.start('menuState');
        }
    }
}