import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei';

import Shirt from './Shirt';
import CameraRig from './CameraRig';

const CanvasModel = () => {
  const FOV = (window.innerWidth <= 768) ? 30 : 25;;
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: FOV }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel