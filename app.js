import THREE from 'https://xrpackage.org/xrpackage/three.module.js';
import {XRPackageEngine, XRPackage} from 'https://xrpackage.org/xrpackage.js';
// import THREE from 'http://127.0.0.1:3000/xrpackage/three.module.js';
// import {XRPackageEngine, XRPackage} from 'http://127.0.0.1:3000/xrpackage.js';
import {GLTFLoader} from 'http://127.0.0.1:3000/xrpackage/GLTFLoader.js';

const localVector = new THREE.Vector3();
const localVector2 = new THREE.Vector3();
const localQuaternion = new THREE.Quaternion();
const localMatrix = new THREE.Matrix4();

const _findObject = (o, name) => {
  let result = null;
  o.traverse(o => {
    if (!result && o.name === name) {
      result = o;
    }
  });
  return result;
};

(async () => {
  console.log('start engine 1');
  const pe = new XRPackageEngine({
    orbitControls: true,
  });
  console.log('start engine 1');
  document.body.appendChild(pe.domElement);
  pe.domElement.style.backgroundColor = '#000';
  
  pe.camera.position.set(0, 3, 5);
  pe.camera.updateMatrixWorld();
  pe.setCamera(pe.camera);
  
  pe.orbitControls.target.set(0, 3, 0);
  
  const {scene: logoMesh} = await new Promise((accept, reject) => {
    new GLTFLoader().load('assets/logo.glb', accept, xhr => {}, reject);
  });
  const wMesh = _findObject(logoMesh, 'Webaverse');
  wMesh.position
    .sub(new THREE.Box3().setFromObject(wMesh).getCenter(new THREE.Vector3()))
    .add(new THREE.Vector3(-0.5, 3 + 1.5, -2));
  wMesh.scale.multiplyScalar(2, 2, 2);
  pe.scene.add(wMesh);
  const webaverseMesh = _findObject(logoMesh, 'W');
  webaverseMesh.position
    .sub(new THREE.Box3().setFromObject(webaverseMesh).getCenter(new THREE.Vector3()))
    .add(new THREE.Vector3(0, 3, -2));
  pe.scene.add(webaverseMesh);

  /* {
    const res = await fetch('./doggo/a.wbn');
    const ab = await res.arrayBuffer();
    const uint8Array = new Uint8Array(ab);
    const p = new XRPackage(uint8Array);
    p.setMatrix(localMatrix.compose(localVector.set(0, 0, 0), localQuaternion.set(0, 0, 0, 1), localVector2.set(1, 1, 1)));
    pe.add(p);
  }
  {
    const res = await fetch('./terrain/a.wbn');
    const ab = await res.arrayBuffer();
    const uint8Array = new Uint8Array(ab);
    const p = new XRPackage(uint8Array);
    p.setMatrix(localMatrix.compose(localVector.set(0, 0, 0), localQuaternion.set(0, 0, 0, 1), localVector2.set(1, 1, 1)));
    pe.add(p);
  }
  {
    const res = await fetch('./tree/a.wbn');
    const ab = await res.arrayBuffer();
    const uint8Array = new Uint8Array(ab);
    const p = new XRPackage(uint8Array);
    p.setMatrix(localMatrix.compose(localVector.set(0, -30, -31), localQuaternion.set(0, 0, 0, 1), localVector2.set(1, 1, 1)));
    pe.add(p);
  } */
  {
    console.log('load multitree');
    const res = await fetch('./augs/multitree/a.wbn');
    const ab = await res.arrayBuffer();
    const uint8Array = new Uint8Array(ab);
    const p = new XRPackage(uint8Array);
    p.setMatrix(localMatrix.compose(localVector.set(0, 0, 0), localQuaternion.set(0, 0, 0, 1), localVector2.set(1, 1, 1)));
    await pe.add(p);
  }
  {
    console.log('load grass');
    const res = await fetch('./augs/grass/a.wbn');
    const ab = await res.arrayBuffer();
    const uint8Array = new Uint8Array(ab);
    const p = new XRPackage(uint8Array);
    p.setMatrix(localMatrix.compose(localVector.set(0, -30, -31), localQuaternion.set(0, 0, 0, 1), localVector2.set(1, 1, 1)));
    await pe.add(p);
  }
  {
    console.log('load chest');
    const res = await fetch('./augs/chest/a.wbn');
    const ab = await res.arrayBuffer();
    const uint8Array = new Uint8Array(ab);
    const p = new XRPackage(uint8Array);
    p.setMatrix(localMatrix.compose(localVector.set(0, 0, 0), localQuaternion.set(0, 0, 0, 1), localVector2.set(1, 1, 1)));
    await pe.add(p);
  }
  {
    console.log('load sprite');
    const res = await fetch('./augs/sprite/a.wbn');
    const ab = await res.arrayBuffer();
    const uint8Array = new Uint8Array(ab);
    const p = new XRPackage(uint8Array);
    p.setMatrix(localMatrix.compose(localVector.set(0, 0, 0), localQuaternion.set(0, 0, 0, 1), localVector2.set(1, 1, 1)));
    await pe.add(p);
  }
  {
    console.log('load miku');
    const res = await fetch('./augs/miku/a.wbn');
    const ab = await res.arrayBuffer();
    const uint8Array = new Uint8Array(ab);
    const p = new XRPackage(uint8Array);
    p.setMatrix(localMatrix.compose(localVector.set(0, 0, 0), localQuaternion.set(0, 0, 0, 1), localVector2.set(1, 1, 1)));
    await pe.add(p);
  }
  {
    console.log('load skybox');
    const res = await fetch('./augs/skybox/a.wbn');
    const ab = await res.arrayBuffer();
    const uint8Array = new Uint8Array(ab);
    const p = new XRPackage(uint8Array);
    p.setMatrix(localMatrix.compose(localVector.set(0, 0, 0), localQuaternion.set(0, 0, 0, 1), localVector2.set(1, 1, 1)));
    await pe.add(p);
  }
  {
    console.log('load ocean');
    const res = await fetch('./augs/ocean/a.wbn');
    const ab = await res.arrayBuffer();
    const uint8Array = new Uint8Array(ab);
    const p = new XRPackage(uint8Array);
    p.setMatrix(localMatrix.compose(localVector.set(0, 0, 0), localQuaternion.set(0, 0, 0, 1), localVector2.set(1, 1, 1)));
    await pe.add(p);
  }
  {
    console.log('load cloud');
    const res = await fetch('./augs/cloud/a.wbn');
    const ab = await res.arrayBuffer();
    const uint8Array = new Uint8Array(ab);
    const p = new XRPackage(uint8Array);
    p.setMatrix(localMatrix.compose(localVector.set(0, 0, 0), localQuaternion.set(0, 0, 0, 1), localVector2.set(1, 1, 1)));
    await pe.add(p);
  }

  /* const renderer = new THREE.WebGLRenderer({
    canvas: pe.domElement,
    context: pe.getContext('webgl'),
    // antialias: true,
    // alpha: true,
    // preserveDrawingBuffer: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.autoClear = false;
  renderer.sortObjects = false;
  renderer.physicallyCorrectLights = true;
  renderer.xr.enabled = true;
  // document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0.5, 1);

  function animate(timestamp, frame) {
    renderer.render(scene, camera);
  }
  renderer.setAnimationLoop(animate); */

  let currentSession = null;
  function onSessionStarted(session) {
    session.addEventListener('end', onSessionEnded);
    
    currentSession = session;

    pe.setSession(session);
  }
  function onSessionEnded() {
    currentSession.removeEventListener('end', onSessionEnded);

    currentSession = null;

    pe.setSession(null);
  }
  document.getElementById('enter-xr-button').addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    
    if (currentSession === null) {
      navigator.xr.requestSession('immersive-vr', {
        optionalFeatures: [
          'local-floor',
          'bounded-floor',
        ],
      }).then(onSessionStarted);
    } else {
      currentSession.end();
    }
  });

})();