import { useFrame } from "@react-three/fiber";
import { MutableRefObject, useRef, useState } from "react";
import { Mesh } from "three";

function Planet(props: any) {
  const ref: MutableRefObject<Mesh | undefined> = useRef();

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => (ref.current!.rotation.x += delta / 10));

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}
    >
      <sphereGeometry args={[1, 32, 16]} />
      <meshStandardMaterial
        color={hovered ? "gold" : "orange"}
        wireframe={true}
      />
    </mesh>
  );
}

export default Planet;
