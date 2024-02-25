if (placar > 0 && placar % 5 === 0) {
    var posicaobomba = Phaser.Math.RND.between(50,575);
    bomba = this.physics.add.sprite(posicaobomba, 100);}


    var x = Phaser.Math.RND.between(50, 575);
        if (placar > 0 && placar % 5 === 0) {

            var bomb = bombs.create(x, 100, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            bomb.allowGravity = false;}

    this.physics.add.collider(bombs, plataforma);
    this.physics.add.collider(alien, bombs, hitBomb, null, this);

    

    var bomba;
        var gameOver = false;