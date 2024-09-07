AFRAME.registerComponent('zombie-feast', {
    init: function () {
        var posX = -50;
        var posY = -3;
        var posZ = -150;
        for (var i = 1; i <= 3; i++) {
            var id = 'D${i}';
            var position = { x: posX, y: posY, z: posZ };
            posX += 50;
            this.zombieSpawn(id, position);
        }
    }})