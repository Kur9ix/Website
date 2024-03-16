import { Canvas } from "@react-three/fiber";
import { animated } from "@react-spring/three";




const FolderObject = () => {
  return (
    <Canvas style={{backgroundColor: "#042630"}}>
      <animated.mesh>
        <boxGeometry args={[2, 2, 2]} />
      </animated.mesh>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
    </Canvas>
  );
};

export default FolderObject;
