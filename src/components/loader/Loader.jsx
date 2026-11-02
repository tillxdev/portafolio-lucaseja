import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { PERSONAL_INFO } from '../../constants/appData';
import '../../styles/components/Loader.css';

const WORD = 'LucasEJA';
const LETTERS = WORD.split('');
const STORAGE_KEY = 'lucaseja_loader_seen';
// Tiempo máximo que se espera al evento load antes de iniciar la salida.
const MAX_WAIT_MS = 200;
// Duración de la transición de salida definida en Loader.css (+ margen).
const EXIT_MS = 360;

const prefersReducedMotion = () => {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
};

const wasSeen = () => {
  try {
    return Boolean(window.sessionStorage.getItem(STORAGE_KEY));
  } catch {
    return false;
  }
};

const markSeen = () => {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, 'true');
  } catch {
    // Almacenamiento bloqueado: el loader simplemente volverá a mostrarse.
  }
};

const shouldShow = () =>
  typeof window !== 'undefined' && !prefersReducedMotion() && !wasSeen();

/**
 * Pantalla de bienvenida breve, solo CSS. Se oculta en cuanto la página
 * termina de cargar (máx. ~600 ms en total). No bloquea el scroll ni se
 * muestra con prefers-reduced-motion.
 */
export const Loader = () => {
  const [phase, setPhase] = useState(() => (shouldShow() ? 'visible' : 'done'));

  useEffect(() => {
    if (phase !== 'visible') return undefined;

    let frameId;
    let started = false;
    const startExit = () => {
      if (started) return;
      started = true;
      frameId = window.requestAnimationFrame(() => setPhase('leaving'));
    };

    const waitId = window.setTimeout(startExit, MAX_WAIT_MS);
    if (document.readyState === 'complete') {
      startExit();
    } else {
      window.addEventListener('load', startExit, { once: true });
    }

    return () => {
      window.clearTimeout(waitId);
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('load', startExit);
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== 'leaving') return undefined;
    const doneId = window.setTimeout(() => {
      markSeen();
      setPhase('done');
    }, EXIT_MS);
    return () => window.clearTimeout(doneId);
  }, [phase]);

  if (phase === 'done' || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div
      className={`loader-overlay${phase === 'leaving' ? ' is-leaving' : ''}`}
      aria-hidden="true"
    >
      <svg
        className="loader-pattern"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="loaderPattern"
            patternUnits="userSpaceOnUse"
            width="120"
            height="120"
            patternTransform="translate(60 60)"
          >
            <g transform="translate(60 60)">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <circle
                  key={`petal-${i}`}
                  cx={18 * Math.cos((i * Math.PI) / 4)}
                  cy={18 * Math.sin((i * Math.PI) / 4)}
                  r={12}
                />
              ))}
              <polygon points="40 0 0 40 -40 0 0 -40" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#loaderPattern)" />
      </svg>

      <div className="loader-title">
        {LETTERS.map((char, index) => (
          <span
            key={`${char}-${index}`}
            className="loader-letter"
            style={{ '--i': index }}
          >
            {char}
          </span>
        ))}
      </div>

      <p className="loader-subtitle">{PERSONAL_INFO.title}</p>

      <div className="loader-footer">
        <div className="loader-footer-row">
          <span className="loader-label">Cargando experiencia</span>
        </div>
        <div className="loader-bar" />
      </div>
    </div>,
    document.body
  );
};
