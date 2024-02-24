'use client';

import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import type { NextComponentType, NextPageContext } from 'next';
import { useRef, useState } from 'react';
import type { Mesh } from 'three';

interface Props {
  children?: React.ReactNode;
  position?: [x: number, y: number, z: number];
  rotation?: [x: number, y: number, z: number];
  scale?: number;
  color?: string;
  speed?: number;
}

const Aqua: NextComponentType<NextPageContext, {}, Props> = ({
  ...props
}: Props) => {
  const { scene } = useGLTF('/logo.glb');
  const meshRef = useRef<Mesh>(null);
  const [rotationCount, setRotationCount] = useState(0);

  useFrame((state, delta) => {
    if (meshRef.current) {
      if (meshRef.current.scale.x < 3.5) {
        meshRef.current.scale.x += 0.35 * delta;
        meshRef.current.scale.y += 1 * delta;
        meshRef.current.scale.z += 0.55 * delta;
      }
      if (rotationCount < 2) {
        meshRef.current.rotation.y += 1 * delta;
        if (meshRef.current.rotation.y >= Math.PI * 2) {
          setRotationCount(rotationCount + 1);
          meshRef.current.rotation.y = 0;
        }
      }
    }
  });

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        ref={meshRef}
        castShadow
        scale={[0, 0, 0]}
        geometry={(scene.children[0] as Mesh).geometry}
        rotation={[0, 0, Math.PI / 2]}
      >
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={3}
          chromaticAberration={0.025}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.1}
          temporalDistortion={0.2}
        />
      </mesh>
    </group>
  );
};

useGLTF.preload('/logo.glb');

export default Aqua;

export const SceneCanvas: NextComponentType<NextPageContext, {}, Props> = ({
  children,
}: Props) => {
  return (
    <Canvas
      shadows
      camera={{ position: [40, 0, -5], fov: 35, near: 1, far: 500 }}
    >
      <color
        attach='background'
        args={['#ffffff']}
      />
      {children}
    </Canvas>
  );
};
