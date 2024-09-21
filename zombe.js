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
    }, 
    zombieSpawn:function(id,position){
        var environEl = document.querySelector('a-scene');
        var zombEl = document.createElement('a-entity');
        zombEl.setAttribute('id', id);
        zombEl.setAttribute("position",position)
        zombEl.setAttribute("gltf-model","#B")
        zombEl.setAttribute("scale","10 10 10")
        zombEl.setAttribute('animation-mixer', { clip: 'Walk' });
        zombEl.setAttribute('animation', {property: 'position', to: '-10 0 1000', easing: 'linear', loop: 'true', dur: '1500000'});
        environEl.appendChild(zombEl);
    }
})