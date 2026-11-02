import { memo } from 'react';
import { CODE_SNIPPETS, TECH_SYMBOLS, PROGRAMMING_SYMBOLS } from '../../constants/backgroundParticles';
import '../../styles/components/AnimatedBackground.css';

// Valores aleatorios calculados una sola vez al cargar el módulo (no en cada render).
// Se exponen como variables CSS para que las reglas móviles y de movimiento
// reducido de AnimatedBackground.css puedan sobrescribirlos.
const withRandomStyle = (items, baseSize, sizeRange, baseOpacity, opacityRange) =>
  items.map((text) => ({
    text,
    style: {
      '--particle-size': `${(Math.random() * sizeRange + baseSize).toFixed(1)}px`,
      '--particle-opacity': (Math.random() * opacityRange + baseOpacity).toFixed(2),
    },
  }));

const CODE_ITEMS = withRandomStyle(CODE_SNIPPETS, 14, 3, 0.4, 0.4);
const TECH_ITEMS = withRandomStyle(TECH_SYMBOLS.slice(0, 10), 18, 4, 0.4, 0.3);
const PROGRAMMING_ITEMS = withRandomStyle(PROGRAMMING_SYMBOLS.slice(0, 5), 20, 4, 0.3, 0.2);

export const AnimatedBackground = memo(function AnimatedBackground() {
  return (
    <div className="animated-background" aria-hidden="true" role="presentation">
      <div className="gradient-layer" />

      <div className="wave-layer wave-1" />
      <div className="wave-layer wave-2" />
      <div className="wave-layer wave-3" />

      <div className="code-particles">
        {CODE_ITEMS.map(({ text, style }, index) => (
          <div key={`code-${index}`} className="code-particle" style={style}>
            {text}
          </div>
        ))}
      </div>

      <div className="tech-symbols">
        {TECH_ITEMS.map(({ text, style }, index) => (
          <div key={`symbol-${index}`} className="tech-symbol" style={style}>
            {text}
          </div>
        ))}
      </div>

      <div className="programming-symbols">
        {PROGRAMMING_ITEMS.map(({ text, style }, index) => (
          <div key={`prog-${index}`} className="programming-symbol" style={style}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
});
