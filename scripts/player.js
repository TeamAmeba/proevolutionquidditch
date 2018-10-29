function Player(_sprite, _puntuacion, numero) {
    this.sprite = _sprite;
    this.sprite.scale.setTo(0.5, 0.5);
    this.sprite.anchor.setTo(0.5, 0.5);
    this.puntos = 0;
    this.puntuacion = _puntuacion;
    
    if(numero == 1){
        this.moverPlayer = function(){
            if (game.input.keyboard.isDown(Phaser.Keyboard.UP) && this.sprite.y > 20)
            {
                this.sprite.y-=5;
            }
            if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN) && this.sprite.y < 580)
            {
                this.sprite.y+=5;
            }

            if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && this.sprite.x > 20)
            {
                this.sprite.x-=5;
                this.sprite.scale.setTo(-0.5,0.5);
            }
            if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && this.sprite.x < 780)
            {
                this.sprite.x+=5;
                this.sprite.scale.setTo(0.5, 0.5);
            }
        }
    }else{
        this.moverPlayer = function(){
            if (game.input.keyboard.isDown(Phaser.Keyboard.W) && this.sprite.y > 20)
            {
                this.sprite.y-=5;
            }
            if (game.input.keyboard.isDown(Phaser.Keyboard.S) && this.sprite.y < 580)
            {
                this.sprite.y+=5;
            }

            if (game.input.keyboard.isDown(Phaser.Keyboard.A) && this.sprite.x > 20)
            {
                this.sprite.x-=5;
                this.sprite.scale.setTo(-0.5,0.5);
            }
            if (game.input.keyboard.isDown(Phaser.Keyboard.D) && this.sprite.x < 780)
            {
                this.sprite.x+=5;
                this.sprite.scale.setTo(0.5, 0.5);
            }
        }
    }

    game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
}

