let scene, camera, rendrer;
function init() {
    scene = new THREE.Scene;
    camera = new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight, 45 , 30000);
    camera.position.set(-900,-200,-900);

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let controls = new THREE.OrbitControls(camera);
    controls.addEventListener('change' ,renderer)

    let materialArray = [];
    let texture_ft = new THREE.TextureLoader().load('negx.jpg');
    let texture_ft = new THREE.TextureLoader().load('posx.jpg');
    let texture_ft = new THREE.TextureLoader().load('negy.jpg');
    let texture_ft = new THREE.TextureLoader().load('posy.jpg');
    let texture_ft = new THREE.TextureLoader().load('negx.jpg');
    let texture_ft = new THREE.TextureLoader().load('posx.jpg');
}