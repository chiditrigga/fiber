import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Box } from '@react-three/drei';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      jjj
      <Canvas>
        {/* Add some ambient light */}
        <ambientLight intensity={0.5} />
        {/* Add a point light */}
        <pointLight position={[10, 10, 10]} />
        {/* Add orbit controls to navigate the scene */}
        <OrbitControls />
        {/* Add a box geometry */}
        <Box>
          <meshStandardMaterial attach="material" color="orange" />
        </Box>
      </Canvas>
    </div>
  );
}

export default App;
