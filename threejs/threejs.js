// threejs.org/docs/index.html#manual/en/introduction/Libraries-and-Plugins

import * as THREE from 'three'
// import { createCamera, cameraMovements } from "./camera.js"
import { GLTFLoader } from './three/addons/loaders/GLTFLoader.js';


function main() {
  
  function createCamera() {
    let fov = 40
    let aspect = 2  // the canvas default
    let near = 0.1
    let far = 1000
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.set(0, 0, 200)
    return camera
  }
  
  function cameraMovements(camera) {
    const thisCamera = camera
    
    thisCamera.position.set(0, 0, 100)
    
    const time = 5000
    var cameraTween = new TWEEN.Tween(thisCamera.position).to({x: 1, y: 1, z: 40}, time)
    var cameraTween2 = new TWEEN.Tween(thisCamera.rotation).to({x: 0, y: 0, z: Math.PI * 2}, time)
    // .onComplete(() => {
    //   object.userData.isTweening = false;
    // });
    cameraTween.start();
    cameraTween2.start();
  }
  
  
  
  const canvas = document.querySelector('#c')
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  const camera = createCamera()
  const loader = new GLTFLoader();

  loader.load( 'threejs/assets/hand/scene.gltf', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
  // cameraMovements(camera)
  /* const entryTime = 2000
  var cameraTween = new TWEEN.Tween(camera.position).to({ x: 1, y: 1, z: 40 }, entryTime)
  var cameraTween2 = new TWEEN.Tween(camera.rotation).to({ x: 0, y: 0, z: Math.PI * 2 }, entryTime)
  cameraTween.start();
  cameraTween2.start(); */


  //scene
  const scene = new THREE.Scene()
  /* let backgroundTexture = new THREE.TextureLoader().load("assets/background.png")
  scene.background = backgroundTexture */
  scene.background = new THREE.Color(0x000000)

  // const interaction = new Interaction(renderer, scene, camera);

  // pointer box
  var box = new THREE.Mesh(new THREE.BoxBufferGeometry(), new THREE.MeshNormalMaterial())
  box.geometry.translate(0, 0, 0.5)
  box.scale.set(1, 1, 3)
  scene.add(box)


  //eyeball
  let eyeTexture = new THREE.TextureLoader().load("assets/eyeball.png")
  var eyeMaterial = new THREE.MeshBasicMaterial({ map: eyeTexture, side: THREE.FrontSide, toneMapped: false, })
  var eyeGeometry = new THREE.SphereBufferGeometry(20, 32, 32)
  var eyeball = new THREE.Mesh(eyeGeometry, eyeMaterial)
  eyeball.position.set(0, 0, 30)
  eyeball.name = "eyeball"
  eyeball.scale.set(1.2, 1.2, 1.2)
  scene.add(eyeball)

  const listener = new THREE.AudioListener();
  const audio = new THREE.Audio( listener );
  const mediaElement = new Audio("/assets/big14.mp3");
  //mediaElement.play();
  audio.setMediaElementSource( mediaElement );
  //camera.add( listener );


  // create a global audio source
  const sound = new THREE.Audio( listener );

  // load a sound and set it as the Audio object's buffer
  const audioLoader = new THREE.AudioLoader();
  audioLoader.load( 'threejs/assets/ES_Fact Checkers (Instrumental Version) - Xavy Rusan.mp3', function( buffer ) {
    sound.setBuffer( buffer );
    sound.setLoop( true );
    sound.setVolume( 0.5 );
    sound.play();
  });

  // circles
  let circlesDescriptions = [
  //["name",                  x  , y  , r, link                                          ],
    ["assets/spinning.mp4" ,  0  , 0  , 6, "https://www.youtube.com/watch?v=_q-_q-_q-_q" ],
    ["assets/clock.mp4"    ,  10 , 5  , 4, "none"                                        ],
    ["assets/fanArt.mp4"   ,  3  , 10 , 3, "none"                                        ],
    ["assets/eyes.mp4"     , -4  , 15 , 4, "none"                                        ],
    ["assets/qrCode.png"   , -8  , 7  , 4, "none"                                        ],
    ]
  let circleArr = []

  function addCircle([name, x, y, r]) {
    let texture
    if (name.includes("mp4")) {
      let video = document.getElementById(name) //loading video texture *from HTML*
      video.play()
      texture = new THREE.VideoTexture(video)
    } else {
      texture = new THREE.TextureLoader().load(name) //loading image texture *from assets*
    }
    var material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.FrontSide, toneMapped: false, })
    let geometry = new THREE.CircleGeometry(r, 32)
    let circle = new THREE.Mesh(geometry, material)

    circle.name = name
    circle.userData.isTweening = false
    circle.position.set(x, y - 6, 0)

    scene.add(circle)
    circleArr.push(circle)
  }

  circlesDescriptions.forEach(element => {
    addCircle(element)
  });

  const raycaster = new THREE.Raycaster()
  var plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -camera.position.z * .5)  // last number (optional) ("signed distance from the origin to the plane")
  var pointOfIntersection = new THREE.Vector3()
  var mouse = new THREE.Vector2()

  let hoveredObject
  let hoveringObject = false

  renderer.domElement.addEventListener('mousemove', onMouseMove, false)
  function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    eyeball.lookAt(pointOfIntersection)

    raycaster.setFromCamera(mouse, camera)
    raycaster.ray.intersectPlane(plane, pointOfIntersection)

    var intersects = raycaster.intersectObjects(scene.children)//, true )
    if (intersects.length > 0) {
      let object = intersects[0].object
      hoveringObject = true
      hoveredObject = intersects[0].object
      if (object.userData.isTweening) return
      var tweenInflate = new TWEEN.Tween(object.scale)
        .to({ x: 1.2, y: 1.2, z: 1.2 }, 250)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onStart(() => { object.userData.isTweening = true; })
        .onComplete(() => { object.userData.isTweening = false; })
      tweenInflate.start();
    } else {
      hoveringObject = false
    }
    // } else {
    //   circleArr.forEach(element => {
    //     //if (element.userData.isTweening) return
    //     var tweenDeflate = new TWEEN.Tween(element.scale)
    //       .to({ x: 1, y: 1, z: 1 }, 500)
    //       .easing(TWEEN.Easing.Cubic.InOut)
    //       //.onStart(() => { element.userData.isTweening = true; })
    //       //.onComplete(() => { element.userData.isTweening = false; })
    //       //.start();
    //     tweenDeflate.start()
    //   });
    // }
  }


  renderer.domElement.addEventListener("click", onclick, true);
  function onclick(event) {
    raycaster.setFromCamera(mouse, camera)
    var intersects = raycaster.intersectObjects(scene.children)//, true )
    if (intersects.length > 0) {
      console.log("clicked on")
      circlesDescriptions.forEach(element => {
        if (element[4] != "none" && intersects[0].object.name === element[0]) {
          window.open(element[4], "_blank") //open link in new tab
        }
      });
      if (intersects[0].object.name === "eyeball") {
        console.log("eyeball")
        const entryTime = 2000
        new TWEEN.Tween(camera.position).to({ x: 1, y: 1, z: 40 }, entryTime).start()
        new TWEEN.Tween(camera.rotation).to({ x: 0, y: 0, z: Math.PI * 2 }, entryTime).start()
      }
    }
  }

  // orbit controls: threejs.org/docs/#examples/en/controls/OrbitControls
  // const controls = new OrbitControls(camera, renderer.domElement)
  // controls.enableDamping = true
  // controls.update()

  //resize
  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement
    const width = canvas.clientWidth
    const height = canvas.clientHeight
    const needResize = canvas.width !== width || canvas.height !== height
    if (needResize) {
      renderer.setSize(width, height, false)
    }
    return needResize
  }

  const clock = new THREE.Clock()
  var delta = Math.min(clock.getDelta(), 0.1)

  function animate() {
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement
      camera.aspect = canvas.clientWidth / canvas.clientHeight
      camera.updateProjectionMatrix()
    }
    requestAnimationFrame(animate)


    circleArr.forEach(element => {
      element.quaternion.copy(camera.quaternion)
    });

    circleArr.forEach(element => {
      if (element.userData.isTweening) return
      if (hoveringObject) {
        if (element == hoveredObject) return
      }
      var tweenDeflate = new TWEEN.Tween(element.scale)
        .to({ x: 1, y: 1, z: 1 }, 250)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onStart(() => { element.userData.isTweening = true; })
        .onComplete(() => { element.userData.isTweening = false; })
        //.start();
      tweenDeflate.start()
    });

    //videoTexture.needsUpdate = true
    TWEEN.update()
    render()
    camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y,(-mouse.x * Math.PI) / 10, 0.005) 
    camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, (mouse.y * Math.PI) / 10, 0.005)

    // const elapsedTime = clock.getElapsedTime()
    // particlesMesh.rotation.x = -mouseY * (elapsedTime *0.000008)
    // particlesMesh.rotation.y = mouseX * (elapsedTime *0.000008)
  }

  function render() { renderer.render(scene, camera) }

  animate()
  requestAnimationFrame(render) // needed?
}
main()