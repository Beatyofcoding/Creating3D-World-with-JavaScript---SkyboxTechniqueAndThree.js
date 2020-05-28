let scene, camera, rendrer;
function init() {
    scene = new THREE.Scene;
    camera = new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight, 45 , 30000);
    camera.position.set(-900,-200,-900);

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}