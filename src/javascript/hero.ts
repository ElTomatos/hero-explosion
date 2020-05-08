/**
 * Vendors
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Scene
 */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls(camera, renderer.domElement);


/**
 * Load Object from Blender
 */
const loadObject = () => {
    const loader = new GLTFLoader();

    loader.load('../blender/somecube.glb', obj => {
        scene.add(obj.scene);
    });
}

/**
 * Renderer function
 */
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

/**
 * Expo
 */
const init = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    (window as any).scene = scene;

    scene.background = new THREE.Color( 0xffffff );

    camera.position.z = 5;

    animate();

    loadObject();
}

export default init;