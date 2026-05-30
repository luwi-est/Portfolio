import { Canvas } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import { meta } from '../data/portfolio';
import styles from './HeroInfo.module.css';

function TorusKnot() {
  return (
    <mesh rotation={[0.4, 0.4, 0]}>
      <torusKnotGeometry args={[1, 0.35, 128, 20, 2, 3]} />
      <MeshDistortMaterial
        color="#0d1a2e"
        emissive="#0a0f2e"
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
