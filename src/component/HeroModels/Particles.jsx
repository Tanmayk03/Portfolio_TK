import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const Particles = ({ count = 200 }) => {
  const mesh = useRef();

  // Generate static positions once
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;      // X
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;  // Y
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12;  // Z
    }
    return arr;
  }, [count]);

  // Animate the entire points mesh using group transformations (smooth, GPU-accelerated)
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.y = time * 0.03;
      mesh.current.rotation.x = Math.sin(time * 0.1) * 0.08;
      mesh.current.position.y = Math.sin(time * 0.4) * 0.15;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#8b5cf6"
        size={0.06}
        transparent
        opacity={0.6}
        depthWrite={false}
        sizeAttenuation={true}
      />
    </points>
  );
};

export default Particles;