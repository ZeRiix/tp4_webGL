import * as THREE from '../build/three.module.js';

const invisible = "";

const groundMarstexture = new THREE.TextureLoader().load('./textures/sol-texture-mars.jpg');
const groundMoontexture = new THREE.TextureLoader().load('./textures/texture-moon.jpg');
const groundNeptunetexture = new THREE.TextureLoader().load('./textures/texture-neptune.jpg');
const groundSuntexture = new THREE.TextureLoader().load('./textures/texture-sun.jpg');

const groundMoonmaterial = new THREE.MeshPhongMaterial({ map: groundMoontexture });
const groundNeptunematerial = new THREE.MeshPhongMaterial({ map: groundNeptunetexture });
const groundSunmaterial = new THREE.MeshPhongMaterial({ map: groundSuntexture });
const groundMarsmaterial = new THREE.MeshPhongMaterial({ map: groundMarstexture });

const groundFileList = {
    "Mars": groundMarsmaterial,
    "Lune": groundMoonmaterial,
    "Soleil": groundSunmaterial,
    "Neptune": groundNeptunematerial,
    "Invisible": invisible
    
    };

export { groundFileList }