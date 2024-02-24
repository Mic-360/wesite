import type { NextComponentType, NextPageContext } from 'next';
import Aqua, { SceneCanvas } from './AquaLogo';

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
    <SceneCanvas>
      {/** Glass Logo */}
      <Aqua position={[0, -2.2, 0]} />
    </SceneCanvas>
  );
};

export default Scene;
