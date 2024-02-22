'use client';

import {
  Environment,
  Lightformer,
  MeshTransmissionMaterial,
  useGLTF,
  useMask,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import type { NextComponentType, NextPageContext } from 'next';
import { useLayoutEffect, useRef } from 'react';
import * as THREE from 'three';

interface Props {
  children?: React.ReactNode;
  position?: [x: number, y: number, z: number];
  rotation?: [x: number, y: number, z: number];
  scale?: number;
  color?: string;
  speed?: number;
}

const Scene: NextComponentType<NextPageContext, {}, Props> = ({
  children,
  ...props
}: Props) => {
  return (
    <>
      <Canvas
        shadows
        camera={{ position: [40, 0, -5], fov: 35, near: 1, far: 500 }}
      >
        <color
          attach='background'
          args={['#FFFFFF']}
        />
        {/** Glass aquarium */}
        <Aqua position={[0, -2.2, 0]} />
        {/** Custom environment map */}
        <Environment resolution={1024}>
          <group rotation={[-Math.PI / 3, 0, 0]}>
            <Lightformer
              intensity={4}
              rotation-x={Math.PI / 2}
              position={[0, 5, -9]}
              scale={[10, 10, 1]}
            />
            {[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
              <Lightformer
                key={i}
                form='circle'
                intensity={4}
                rotation={[Math.PI / 2, 0, 0]}
                position={[x, 4, i * 4]}
                scale={[4, 1, 1]}
              />
            ))}
            <Lightformer
              intensity={2}
              rotation-y={Math.PI / 2}
              position={[-5, 1, -1]}
              scale={[50, 2, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-y={-Math.PI / 2}
              position={[10, 1, 0]}
              scale={[50, 2, 1]}
            />
          </group>
        </Environment>
        {/* <OrbitControls
          enableZoom={false}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.5}
          panSpeed={0.5}
          rotateSpeed={0.5}
          minDistance={1}
          maxDistance={100}
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
          target={[0, 0, 0]}
        /> */}
      </Canvas>
    </>
  );
};

export default Scene;

const Aqua: NextComponentType<NextPageContext, {}, Props> = ({
  children,
  ...props
}: Props) => {
  const ref = useRef<any>();
  const { scene } = useGLTF('/logo.glb');
  const stencil = useMask(1, false);
  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.traverse(
        (child: THREE.Mesh) =>
          child.material && Object.assign(child.material, { ...stencil })
      );
    }
  }, [stencil]);
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        castShadow
        scale={[3.5, 10, 5.5]}
        geometry={(scene.children[0] as THREE.Mesh).geometry}
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
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          metalness={0.1}
        />
      </mesh>
      <group ref={ref}>{children}</group>
    </group>
  );
};
