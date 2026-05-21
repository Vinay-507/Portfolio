import { Float, MeshDistortMaterial, OrbitControls, Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useMemo, useRef } from 'react';

function Core() {
  const group = useRef();
  const particles = useRef();
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(900 * 3);
    for (let i = 0; i < 900; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return positions;
  }, []);

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();
    group.current.rotation.y = t * 0.16 + pointer.x * 0.25;
    group.current.rotation.x = pointer.y * 0.15;
    particles.current.rotation.y = t * 0.035;
  });

  return (
    <>
      <points ref={particles}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlePositions.length / 3}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.018} color="#18f7ff" transparent opacity={0.72} />
      </points>
      <group ref={group}>
        <Float speed={1.8} rotationIntensity={0.55} floatIntensity={1.5}>
          <mesh>
            <icosahedronGeometry args={[1.8, 4]} />
            <MeshDistortMaterial
              color="#101d4f"
              emissive="#18f7ff"
              emissiveIntensity={0.35}
              roughness={0.15}
              metalness={0.82}
              distort={0.28}
              speed={1.8}
            />
          </mesh>
        </Float>
        {[0, 1, 2].map((ring) => (
          <mesh key={ring} rotation={[ring * 0.7, ring * 0.4, ring * 0.9]}>
            <torusGeometry args={[2.55 + ring * 0.42, 0.012, 16, 180]} />
            <meshBasicMaterial color={ring === 1 ? '#9b5cff' : '#18f7ff'} transparent opacity={0.55} />
          </mesh>
        ))}
        {Array.from({ length: 7 }).map((_, i) => {
          const angle = (i / 7) * Math.PI * 2;
          return (
            <Float key={i} speed={1 + i * 0.12} floatIntensity={0.7}>
              <mesh position={[Math.cos(angle) * 3.7, Math.sin(angle * 1.6) * 1.4, Math.sin(angle) * 3.7]}>
                <octahedronGeometry args={[0.2 + (i % 3) * 0.05, 0]} />
                <meshStandardMaterial color={i % 2 ? '#9b5cff' : '#18f7ff'} emissive={i % 2 ? '#9b5cff' : '#18f7ff'} emissiveIntensity={0.75} />
              </mesh>
            </Float>
          );
        })}
      </group>
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 48 }} dpr={[1, 1.7]} gl={{ antialias: true, alpha: true }}>
      <Suspense fallback={null}>
        <color attach="background" args={['#030714']} />
        <fog attach="fog" args={['#030714', 8, 18]} />
        <ambientLight intensity={0.35} />
        <pointLight position={[4, 4, 4]} color="#18f7ff" intensity={3.2} />
        <pointLight position={[-5, -3, 3]} color="#9b5cff" intensity={2.4} />
        <Stars radius={70} depth={35} count={1500} factor={3} saturation={0} fade speed={0.7} />
        <Core />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.55} />
      </Suspense>
    </Canvas>
  );
}
