import { useState, useEffect, useRef, useCallback } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../libs/model'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelDog = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState()
  const [_camera, setCamera] = useState()
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0))
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  )
  const [scene] = useState(new THREE.Scene())
  const [_controls, setControls] = useState()

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight
      renderer.setSize(scW, scH)
    }
  }, [renderer])

  useEffect(() => {
    const { current: container } = refContainer
    if (container && !renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const newRenderer = new THREE.WebGL1Renderer({
        antialias: true,
        alpha: true
      })
      newRenderer.setPixelRatio(window.devicePixelRatio)
      newRenderer.setSize(scW, scH)
      newRenderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(newRenderer.domElement)
      setRenderer(newRenderer)

      const scale = scH * 0.005 + 4.8
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
      scene.add(ambientLight)

      const controls = new OrbitControls(camera, newRenderer.domElement)
      controls.autoRotate = true
      controls.target.copy(target)
      setControls(controls)

      let req = null
      let frame = 0

      const animate = () => {
        req = requestAnimationFrame(animate)
        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20
          camera.position.y = 10
          camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }
        newRenderer.render(scene, camera)
      }

      // Load the model only once
      loadGLTFModel(scene, './dog.glb', {
        receiveShadow: false,
        castShadow: false
      }).then(() => {
        animate()
        setLoading(false)
      }).catch((error) => {
        console.error('Error loading model:', error)
        setLoading(false)
      })

      // Cleanup function - moved outside animate function
      return () => {
        if (req) {
          cancelAnimationFrame(req)
        }
        if (newRenderer) {
          newRenderer.dispose()
          if (container && container.contains(newRenderer.domElement)) {
            container.removeChild(newRenderer.domElement)
          }
        }
        // Clean up controls
        if (controls) {
          controls.dispose()
        }
        // Clear the scene
        while (scene.children.length > 0) {
          scene.remove(scene.children[0])
        }
      }
    }
  }, []) // Keep empty dependency array but ensure proper cleanup

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  return (
    <Box
      ref={refContainer}
      className="voxel-dog"
      m="auto"
      mt={['-20px', '-60px', '-120px']}
      mb={['-40px', '-140px', '-200px']}
      w={[280, 480, 640]}
      h={[280, 480, 640]}
      position="relative"
    >
      {loading && (
        <Spinner
          size="xl"
          position="absolute"
          left="50%"
          top="50%"
          ml="calc(0px - var(--spinner-size)/2)"
          mt="calc(0px - var(--spinner-size))"
        />
      )}
    </Box>
  )
}

export default VoxelDog