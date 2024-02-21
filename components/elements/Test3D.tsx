'use client';

import * as THREE from 'three';
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, N8AO } from '@react-three/postprocessing';
import { ContactShadows, useGLTF } from '@react-three/drei';
import { a, useTransition, useSpring } from '@react-spring/three';

interface GeometryProps {
  r: number;
  position: [x: number, y: number, z: number];
  geometry: THREE.BufferGeometry;
  material: THREE.Material;
}

function Geometry({ r, position, ...props }: GeometryProps) {
  const ref = useRef<any>();
  useFrame((state) => {
    if (ref.current) {
      // ref.current.rotation.y += 0.004 * r;
      ref.current.position.y =
        position[1] +
        Math[r > 0.5 ? 'cos' : 'sin'](state.clock.getElapsedTime() * r) * r;
    }
  });
  return (
    <group
      position={position}
      ref={ref}
    >
      <a.mesh {...props} />
    </group>
  );
}

type ItemProps = {
  position: [x: number, y: number, z: number];
  r: number;
  geometry: THREE.BufferGeometry;
}[];

function Geometries() {
  const { scene } = useGLTF('/logo.glb');

  const items: ItemProps = [
    {
      position: [0, 0, 0],
      r: Math.PI / 2,
      geometry: (scene.children[0] as THREE.Mesh).geometry,
    },
  ];

  const transition = useTransition(items, {
    from: { scale: [0, 0, 0], rotation: [0, 0, 0] },
    enter: ({ r }: { r: number }) => ({
      scale: [2.5, 1, 2.5],
      rotation: [0, -r, -r],
    }),
    leave: { scale: [2.5, 1, 2.5], rotation: [0, -Math.PI / 2, -Math.PI / 2] },
    config: { mass: 5, tension: 1000, friction: 100 },
    trail: 100,
  });

  return transition(
    (
      props: any,
      {
        position: [x, y, z],
        r,
        geometry,
      }: {
        position: [x: number, y: number, z: number];
        r: number;
        geometry: THREE.BufferGeometry;
      }
    ) => (
      <Geometry
        position={[x * 5, y * 3, z]}
        material={
          //make material glass with neon shades
          new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            metalness: 0.1,
            roughness: 0.1,
            clearcoat: 1,
            clearcoatRoughness: 0.1,
            reflectivity: 1,
            envMapIntensity: 1,
            transmission: 0.9,
            opacity: 0.3,
            transparent: true,
            side: THREE.DoubleSide,
          })
        }
        geometry={geometry}
        r={r}
        {...props}
      />
    )
  );
}

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  return useFrame(() =>
    camera.position.lerp(
      vec.set(-mouse.x * 16, -mouse.y * 10, camera.position.z),
      0.02
    )
  );
}

export default function Test3D() {
  const { color } = useSpring({
    color: 0,
    from: { color: 1 },
    config: { friction: 50 },
    loop: true,
  });
  return (
    <Canvas camera={{ position: [0, 0, 15], near: 5, far: 40 }}>
      <color
        attach='background'
        args={['white']}
      />
      <a.fog
        attach='fog'
        args={['#e6e6fa', 10, 40]}
      />
      <ambientLight intensity={0.8} />
      <directionalLight
        castShadow
        position={[2.5, 12, 12]}
        intensity={4}
      />
      <pointLight position={[20, 20, 20]} />
      <pointLight
        position={[-20, -20, -20]}
        intensity={5}
      />
      <Suspense fallback={null}>
        <Geometries />
        <ContactShadows
          position={[0, -7, 0]}
          opacity={0.75}
          scale={40}
          blur={1}
          far={9}
        />
        <EffectComposer disableNormalPass>
          <N8AO
            aoRadius={3}
            distanceFalloff={3}
            intensity={1}
          />
        </EffectComposer>
      </Suspense>
      <Rig />
    </Canvas>
  );
}
