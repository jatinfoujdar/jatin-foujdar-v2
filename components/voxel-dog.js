import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Box, Spinner } from '@chakra-ui/react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadGLTFModel } from '../libs/model';
// import { render } from 'react-dom';

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const VoxelDog = () => {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState();
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI),
    ),
  );
  const [scene] = useState(new THREE.Scene());
  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;
      renderer.setSize(scW, scH);
    }
  }, [renderer]);

  useEffect(() => {
    const { current: container } = refContainer;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const rendererInstance = new THREE.WebGL1Renderer({
        antialias: true,
        alpha: true,
      });
      rendererInstance.setPixelRatio(window.devicePixelRatio);
      rendererInstance.setSize(scW, scH);
      rendererInstance.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(rendererInstance.domElement);
      setRenderer(rendererInstance);

      const scale = scH * 0.005 + 4.8;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000,
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      // setCamera(camera); // removed unused variable

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, rendererInstance.domElement);
      controls.autoRotate = true;
      // setControls(controls); // removed unused variable

      let req = null;
      let frame = 0;

      const animate = () => {
        req = requestAnimationFrame(animate);
        frame = frame <= 100 ? frame + 1 : frame;
        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;
          camera.position.y = 10;
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }
        rendererInstance.render(scene, camera);
      };

      loadGLTFModel(scene, './dog.glb', {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
        setLoading(false);
      });

      // ✅ CLEANUP
      return () => {
        cancelAnimationFrame(req);
        controls.dispose();
        rendererInstance.dispose();
        container.removeChild(rendererInstance.domElement); // 🔥 Key fix
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialCameraPosition, renderer, scene, target]);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false);
    return () => {
      window.removeEventListener('resize', handleWindowResize, false);
    };
  }, [renderer, handleWindowResize]);

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
  );
};

export default VoxelDog;
