"use client";
import Planet from "@/components/Planet";
import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styles from "./page.module.css";

const GAP = 3;

export default function Home() {
  return (
    <div className={styles.main}>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Planet position={[-GAP, GAP / 2, 0]} />
        <Planet position={[0, GAP / 2, 0]} />
        <Planet position={[GAP, GAP / 2, 0]} />
        <Planet position={[-GAP, -GAP / 2, 0]} />
        <Planet position={[0, -GAP / 2, 0]} />
        <Planet position={[GAP, -GAP / 2, 0]} />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={3}
          saturation={0}
          fade
        />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
