import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

const SecurityShield = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <cylinderGeometry args={[1, 1.2, 0.2, 6]} />
      <meshStandardMaterial 
        color="#1e3a8a" 
        metalness={0.8} 
        roughness={0.2}
        emissive="#0f172a"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};

const FloatingOrbs = () => {
  const orbsRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (orbsRef.current) {
      orbsRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const orbs = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 3;
      positions.push({
        x: Math.cos(angle) * radius,
        y: Math.sin(angle * 2) * 0.5,
        z: Math.sin(angle) * radius,
      });
    }
    return positions;
  }, []);

  return (
    <group ref={orbsRef}>
      {orbs.map((pos, index) => (
        <Sphere key={index} args={[0.1]} position={[pos.x, pos.y, pos.z]}>
          <meshStandardMaterial 
            color="#2C4A39" 
            emissive="#2C4A39"
            emissiveIntensity={0.5}
          />
        </Sphere>
      ))}
    </group>
  );
};

const SecurityScene = () => {
  return (
    <div className="w-full h-96 bg-gradient-to-br from-blue-900 to-blue-700">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#2C4A39" />
        
        <SecurityShield />
        <FloatingOrbs />
        
        <Text
          position={[0, -2.5, 0]}
          fontSize={0.5}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter-bold.woff"
        >
          SECURE • PROTECT • DEFEND
        </Text>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
};

export default SecurityScene;