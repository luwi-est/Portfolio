import { Canvas } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import { useMemo } from 'react';
import * as THREE from 'three';
import { meta } from '../data/portfolio';
import styles from './HeroInfo.module.css';

function TorusKnot() {
  const gradientTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    
    // Create a radial gradient with dark colors
    const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 181);
    gradient.addColorStop(0, '#1a2f4a');    // dark cyan-blue
    gradient.addColorStop(0.5, '#0f1a2e');  // very dark blue
    gradient.addColorStop(1, '#1a1f3a');    // dark purple-blue
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 256);
    
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  return (
    <mesh rotation={[0.4, 0.4, 0]} scale={0.9}>
      <torusKnotGeometry args={[1, 0.35, 128, 20, 2, 3]} />
      <MeshDistortMaterial
        map={gradientTexture}
        emissive="#1a3a5a"
        roughness={0.2}
        metalness={0.8}
        distort={0.15}
        speed={1.5}
      />
    </mesh>
  );
}

export default function HeroInfo() {
  return (
    <section id="hero-info" className={styles.section}>
      <div className="wrapper">
        <div className={styles.inner}>
          <div className={styles.text}>
            <div className={styles.tag}>
              <span className={styles.tagDot} />
              {meta.availability}
            </div>
            <p className={styles.title}>
              {meta.title} &nbsp;/&nbsp; <span>{meta.title2}</span>
            </p>
            <p className={styles.desc}>{meta.description}</p>
            <div className={styles.btns}>
              <a href="#projects" className="btn btn-primary"
                onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                View Projects ↓
              </a>
            </div>
          </div>
          <div className={styles.visual}>
            <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
              <ambientLight intensity={0.3} />
              <pointLight position={[3, 3, 3]} color="#7DF9FF" intensity={2.5} />
              <pointLight position={[-3, -2, 2]} color="#B06EFF" intensity={2} />
              <pointLight position={[0, -3, 1]} color="#FF6EC7" intensity={1.2} />
              <TorusKnot />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.8} />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
