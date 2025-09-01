import './style.css'
import * as THREE from 'three'

// Initialize the app
document.querySelector('#app').innerHTML = `
  <div class="w-full h-screen bg-gradient-to-br from-white to-gray-100 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Telmo Assistant 3D</h1>
      <p class="text-gray-600">WebGL + Three.js + Tailwind CSS</p>
      <div id="three-container" class="mt-8 w-96 h-96 mx-auto border border-gray-200 rounded-lg shadow-lg bg-white"></div>
    </div>
  </div>
`

// Basic Three.js setup
const container = document.getElementById('three-container')
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

renderer.setSize(384, 384) // 96 * 4 = 384px (w-96 h-96)
renderer.setClearColor(0xf8f9fa, 1)
container.appendChild(renderer.domElement)

// Simple rotating cube
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({ 
  color: 0x6b7280,
  wireframe: true 
})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5

// Animation loop
function animate() {
  requestAnimationFrame(animate)
  
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  
  renderer.render(scene, camera)
}

animate()

console.log('🎯 Telmo Assistant 3D initialized with Three.js + Tailwind')
