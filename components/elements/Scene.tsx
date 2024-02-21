'use client';
import type { NextComponentType, NextPageContext } from 'next';
import * as THREE from 'three';
import { useLayoutEffect, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  useMask,
  useGLTF,
  useAnimations,
  Float,
  Instance,
  Instances,
  CameraControls,
} from '@react-three/drei';
import {
  Lightformer,
  Environment,
  RandomizedLight,
  AccumulativeShadows,
  MeshTransmissionMaterial,
} from '@react-three/drei';

type Sphere = [number, string, number, number[]];

const spheres: Sphere[] = [
  [1, 'red', 0.05, [-4, -1, -1]],
  [0.75, 'pink', 0.1, [-4, 2, -2]],
  [1.25, 'purple', 0.2, [4, -3, 2]],
  [1.5, 'blue', 0.3, [-4, -2, -3]],
  [2, 'gray', 0.3, [-4, 2, -4]],
  [2, 'blue', 0.3, [-4, 2, -4]],
  [1.5, 'red', 0.05, [-4, -1, -1]],
  [2, 'pink', 0.1, [-4, 2, -2]],
  [1.5, 'purple', 0.2, [4, -3, 2]],
];

interface Props {
  children?: React.ReactNode;
  position?: [x: number, y: number, z: number];
  rotation?: [x: number, y: number, z: number];
  scale?: number;
  color?: string;
  speed?: number;
  spheres?: Sphere[];
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
        <Aqua position={[0, -5.2, 0]}>
          <Instances renderOrder={-1000}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshBasicMaterial depthTest={false} />
            {spheres.map(([scale, color, speed, position], index) => (
              <Sphere
                key={index}
                scale={scale}
                color={color}
                speed={speed}
                position={position as [number, number, number]}
              />
            ))}
          </Instances>
        </Aqua>
        {/** Soft shadows */}
        {/* <AccumulativeShadows
          temporal
          frames={100}
          color=bluelightblue'
          colorBlend={2}
          opacity={0.7}
          scale={60}
          position={[0, -5, 0]}
        >
          <RandomizedLight
            amount={8}
            radius={15}
            ambient={0.5}
            intensity={1}
            position={[-5, 10, -5]}
            size={20}
          />
        </AccumulativeShadows> */}
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
        <CameraControls
          truckSpeed={0}
          dollySpeed={0}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />
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
  // const { nodes } = useGLTF('/shapes-transformed.glb');
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
        scale={[3, 3, 3]}
        geometry={(scene.children[0] as THREE.Mesh).geometry}
        rotation={[Math.PI, Math.PI / 10, Math.PI / 2]}
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
        />
      </mesh>
      <group ref={ref}>{children}</group>
    </group>
  );
};

const Sphere: NextComponentType<NextPageContext, {}, Props> = ({
  position,
  scale = 1,
  speed = 0.1,
  color = 'white',
}: Props) => {
  return (
    <Float
      rotationIntensity={40}
      floatIntensity={20}
      speed={speed / 2}
    >
      <Instance
        position={position}
        scale={scale}
        color={color}
      />
    </Float>
  );
};
