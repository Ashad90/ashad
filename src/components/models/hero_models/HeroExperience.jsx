import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense } from "react";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  // Si c'est mobile, on ne rend pas le composant 3D pour améliorer les performances
  if (isMobile) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-white-50 text-lg">Interactive Experience</p>
        </div>
      </div>
    );
  }

  return (
    <Canvas 
      camera={{ position: [0, 0, 15], fov: 45 }}
      // Optimisations pour les performances
      gl={{ 
        antialias: !isTablet, // Désactive l'antialiasing sur tablette
        powerPreference: "high-performance",
        alpha: false,
        stencil: false,
        depth: true
      }}
    >
      {/* deep blue ambient */}
      <ambientLight intensity={0.2} color="#1a1a40" />
      {/* Configure OrbitControls to disable panning and control zoom based on device type */}
      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={!isTablet} // Disables zoom on tablets
        maxDistance={20} // Maximum distance for zooming out
        minDistance={5} // Minimum distance for zooming in
        minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
        // Réduire la vitesse sur tablette pour de meilleures performances
        enableDamping={true}
        dampingFactor={isTablet ? 0.05 : 0.1}
      />

      <Suspense fallback={null}>
        <HeroLights />
        {/* Réduire le nombre de particules sur tablette */}
        <Particles count={isTablet ? 50 : 100} />
        <group
          scale={isTablet ? 0.8 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
