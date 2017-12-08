var scene = new THREE.Scene();
scene.background = new THREE.Color("#b3ccff");


var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.01, 1800 );
camera.position.z = 500;
//camera.position.x = -500;
//camera.position.y = -300;
var pointLight = new THREE.PointLight( 0xffffff, 0.5, 0 ); 
camera.add( pointLight );
scene.add(camera);

var renderer = new THREE.WebGLRenderer({
			antialias: true,
            alpha: true,
            preserveDrawingBuffer: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


var controls = new THREE.TrackballControls(camera, renderer.domElement );
    controls.rotateSpeed = 4.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 2.0;
    controls.noZoom = false;
    controls.noPan = false;
    controls.staticMoving = true;
    controls.dynamicDampingFactor = 0.3;
    controls.keys = [65, 83, 68];

var ambientLight = new THREE.AmbientLight("#808080");

var headLigntFlags= {
        color: "#ffffff",
        on: true,
        intensity: 0.5,
        distance: 0
    };
var headLight = new THREE.PointLight(headLigntFlags);

//scene.add(ambientLight);
//scene.add(headLight);

flags = {
        specular: '#ffffff',
        color: '#a0a0a0',
        emissive: '#7c7b7b',
        flatShading: true,
        shininess: 30,
       // wireframe: true, //make mesh transparent
        wireframeLinewidth: 1
   };

   ambient = new THREE.AmbientLight(0xffffff, 0.15);
            scene.add(ambient);
            keyLight = new THREE.DirectionalLight(0xffffff, 0.3);
            keyLight.position.set(-100, 0, 100);
            fillLight = new THREE.DirectionalLight(0xffffff, 0.2);
            fillLight.position.set(100, 0, 100);
            backLight = new THREE.DirectionalLight(0xffffff, 0.3);
            backLight.position.set(100, 0, -100).normalize();
   
  // scene.add(keyLight);
  // scene.add(fillLight);
   //scene.add(backLight);
   
  

var material = new THREE.MeshPhongMaterial(flags);

var ctmLoader = new THREE.CTMLoader();
var material;

ctmLoader.load( "minipc.ctm",  function( geometry ) {
	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );
	mesh.visible = true;
},  { useWorker: true }  );

/*
var mtlLoader = new THREE.MTLLoader();
mtlLoader.setTexturePath('/examples/3d-obj-loader/assets/');
mtlLoader.setPath('/examples/3d-obj-loader/assets/');
mtlLoader.load('r2-d2.mtl', function (materials) {

    materials.preload();

*/
/*    var objLoader = new THREE.OBJLoader();
//	var materials = new THREE.MeshPhongMaterial( { color: 0xf3e5df,  shininess: 30 } );
//	objLoader.setMaterials(materials)
//    objLoader.setPath('/examples/3d-obj-loader/assets/');
    objLoader.load('minipc.obj', function (object) {

       scene.add(object);
        object.position.x += 50;
		

    });
*/
var animate = function () {
	requestAnimationFrame( animate );
	controls.update();
	renderer.render(scene, camera);
};

animate();

function log() {
  console.log(camera.position);
}
