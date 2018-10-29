var ProEvolutionQuidditch = {
    numPlayer: 1
}

ProEvolutionQuidditch.bootState = function(game) {

}

ProEvolutionQuidditch.bootState.prototype = {

    preload: function() {
        this.load.image('loading1','../assets/images/text/loading1.png');
        game.physics.startSystem(Phaser.Physics.ARCADE);
       
    },

    create: function() {
       
        game.state.start('preloadState');
    },

    update: function() {

    }
}
