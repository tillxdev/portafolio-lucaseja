import { Principal } from './paginas/Principal';
import { AnimatedBackground } from './components/ui/AnimatedBackground';
import { ThemeToggle } from './components/ui/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import { Loader } from './components/loader/Loader';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider>
      <Loader />
      <a className="skip-link" href="#welcome">
        Saltar al contenido
      </a>
      <AnimatedBackground />
      <Principal />
      {/* Fijo en pantalla: va después del contenido para no ser el primer Tab */}
      <ThemeToggle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ThemeProvider>
  );
}

export default App;
