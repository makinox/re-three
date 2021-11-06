import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Cursor
const cursor = {
  x: 0,
  y: 0,
};
window.addEventListener('mousemove', (evt) => {
  cursor.x = evt.clientX / sizes.width - 0.5;
  cursor.y = -(evt.clientY / sizes.height - 0.5);
});

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Perspective Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 45);
// const aspectRatio = sizes.width / sizes.height;
// console.log(aspectRatio);

// Ortographic Camera
// const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1, 0.1, 100);
// camera.position.x = 2;
// camera.position.y = 2;
camera.position.z = 3;
console.log(camera.position.length());
scene.add(camera);

// Orbit controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// const clock = new THREE.Clock();

// Animations
function tick() {
  // const elapsedTime = clock.getElapsedTime();
  // mesh.rotation.y = elapsedTime;

  // Update camera
  // // camera.position.x = cursor.x * 10;
  // // camera.position.y = cursor.y * 10;
  // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
  // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
  // camera.position.y = cursor.y * 5;

  controls.update();

  // camera.lookAt(mesh.position);
  // camera.lookAt(new THREE.Vector3());
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
}
tick();
