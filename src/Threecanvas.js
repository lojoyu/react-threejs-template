import * as THREE from "three";

var scene, camera, renderer;

let canvas = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    
    renderer.setSize(0, 0);
    
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    
    scene.add( cube );
    camera.position.z = 5;
    
    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();

    return renderer;
};

let resizeCanvas = (size) => {
    if (camera && renderer) {
        camera.aspect = size.w / size.h;
        camera.updateProjectionMatrix();
        renderer.setSize( size.w, size.h );
    }
} 

export {canvas, resizeCanvas};