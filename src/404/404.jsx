import React from 'react';
import Waves from './Waves';
import FuzzyText from "./FuzzyText.jsx"
import GlitchText from "./GlitchText.jsx"

import './styles.css';

export default function App() {
  const hoverIntensity = 0.3;
  const enableHover = false; // disable fuzzy text hover effect

  return (
    <>
      {/* Waves background */}
      <Waves
        lineColor="#444"          // dark grey wave lines
        backgroundColor="#000"    // BLACK background for the canvas
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={0}         // disable wave movement on mouse move
        xGap={12}
        yGap={36}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Main container */}
      <div className="app-container" style={{ zIndex: 1 }}>
        <GlitchText
          speed={1}
          enableShadows={true}
          enableOnHover={false}
          style={{ fontSize: '8rem', fontWeight: '900' }}
        >
          404
        </GlitchText>

        <FuzzyText
          baseIntensity={0.1}
          hoverIntensity={hoverIntensity}
          enableHover={enableHover}
          style={{ fontSize: '1.5rem', fontWeight: '600' }}
        >
          Page Not Found (0x404)
        </FuzzyText>

        <button className="help-button">
          Help
        </button>
      </div>
    </>
  );
}
