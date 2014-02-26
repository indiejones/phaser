
// var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.tilemap('map', 'assets/tilemaps/maps/collision_test.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('ground_1x1', 'assets/tilemaps/tiles/ground_1x1.png');
    game.load.image('walls_1x2', 'assets/tilemaps/tiles/walls_1x2.png');
    game.load.image('tiles2', 'assets/tilemaps/tiles/tiles2.png');
    game.load.image('player', 'assets/sprites/phaser-dude.png');
    game.load.image('box', 'assets/sprites/ufo.png');
    game.load.image('ship', 'assets/sprites/thrust_ship2.png');

}

var ship;
var map;
var tileset;
var layer;
var p;
var b;
var cursors;
var box2;
var dump;

function create() {

    game.stage.backgroundColor = '#787878';

    map = game.add.tilemap('map');

    map.addTilesetImage('ground_1x1');
    map.addTilesetImage('walls_1x2');
    map.addTilesetImage('tiles2');
    
    layer = map.createLayer('Tile Layer 1');

    // layer.resizeWorld();

    map.setCollisionBetween(1, 12);

    // layer.debug = true;

    dump = map.generateCollisionData(layer);

    // dump = map.createCollisionObjects('collision');

    // console.log(dump);
    // console.log(dump[7]);


    // ship = game.add.sprite(200, 200, 'ship');
    // ship.physicsEnabled = true;



    // p = game.add.sprite(32, 32, 'player');

    // b = game.add.sprite(300, 300, 'player');
    // b.physicsEnabled = true;
    // b.body.static = true;
    // b.body.mass = 1;
    // b.body.data.motionState = 2;

    // b.body.kinematic = true;
    // b.body.clearShapes();
    // b.body.addLine(64, 0, 0, 0);
    // b.body.fixedRotation = true;
    // b.body.static = true;

    // var data = [[0,0] ,  [0, -32] , [32, -64] , [64, -64] , [64,-96], [128,-96], [160,-128], [192,-128], [192,-96], [160,-64], [96,-64], [96,-32], [32,-32], [32,0], [0,0]];
    // b = game.physics.createBody(192, 352, 0, true, { removeCollinearPoints: true }, data);
    // b = game.physics.createBody(32, 32, 0, true, { removeCollinearPoints: true }, data);
    // b = game.physics.createBody(256, 480, 0, true, { removeCollinearPoints: true }, data);

    // console.log('DATA');
    // console.log(data);

    // var re = b.body.addPolygon({removeCollinearPoints:true}, data);
    // var re = b.body.addPolygon({removeCollinearPoints:true}, data);

    // console.log(data.length);
    // console.log(re);
    // console.log(output);
    // console.log(b.body.data.shapes[0].vertices);

    box2 = game.add.sprite(200, 200, 'box');
    // box2.name = 'bob';
    // box2.anchor.set(0.5);
    box2.physicsEnabled = true;
    box2.body.fixedRotation = true;

    game.camera.follow(box2);

    cursors = game.input.keyboard.createCursorKeys();

}

function update() {

    // if (cursors.left.isDown)
    // {
    //     p.x -= 4;
    // }
    // else if (cursors.right.isDown)
    // {
    //     p.x += 4;
    // }

    if (cursors.left.isDown)
    {
        box2.body.moveLeft(400);
    }
    else if (cursors.right.isDown)
    {
        box2.body.moveRight(400);
    }
    else if (!cursors.left.isDown && !cursors.right.isDown)
    {
        box2.body.data.force[0] = 0;
    }

    if (cursors.up.isDown)
    {
        box2.body.moveUp(400);
    }
    else if (cursors.down.isDown)
    {
        box2.body.moveDown(400);
    }

/*    if (cursors.left.isDown)
    {
        ship.body.rotateLeft(100);
    }
    else if (cursors.right.isDown)
    {
        ship.body.rotateRight(100);
    }
    else
    {
        ship.body.setZeroRotation();
    }

    if (cursors.up.isDown)
    {
        ship.body.thrust(400);
    }
*/


}

function render() {

    // game.debug.renderCameraInfo(game.camera, 420, 320);

    // game.debug.renderText(box2.body.velocity.x, 32, 32);
    // game.debug.renderText(box2.body.velocity.y, 32, 64);

    // game.debug.renderText(b.body.velocity.x, 32, 32);
    // game.debug.renderText(b.body.velocity.y, 32, 64);

    for (var i = 0, len = dump.length; i < len; i++)
    {
        game.debug.renderPhysicsBody(dump[i]);
    }

        // game.debug.renderPhysicsBody(dump[0]);
        // game.debug.renderPhysicsBody(b);

    // game.debug.renderPhysicsBody(ship.body);


}
