import { useState, useEffect, useRef } from 'react';
import {
    FaUser,
    FaProjectDiagram,
    FaTools,
    FaEnvelope,
    FaCertificate,
    FaBriefcase,
    FaFileDownload
} from 'react-icons/fa';
import { NAVIGATION_ITEMS, SOCIAL_LINKS, CV_FILENAME } from '../../constants/appData';
import '../../styles/components/Navbar.css';

const NAV_ICONS = {
    projects: FaProjectDiagram,
    experience: FaBriefcase,
    skills: FaTools,
    aboutme: FaUser,
    certifications: FaCertificate,
    contact: FaEnvelope
};

const MOBILE_BREAKPOINT = 767;
const MENU_ITEMS = NAVIGATION_ITEMS.filter((item) => item.inMenu !== false);

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('welcome');
    const navbarRef = useRef(null);
    const menuButtonRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Cerrar menú al presionar Escape y trampar foco (Focus Trap)
    useEffect(() => {
        if (!isMenuOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeMenu();
                menuButtonRef.current?.focus();
                return;
            }

            if (e.key === 'Tab') {
                const focusableElements = navbarRef.current?.querySelectorAll(
                    'a[href], button:not([disabled])'
                );
                if (!focusableElements || focusableElements.length === 0) return;

                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isMenuOpen]);

    // Cerrar menú al hacer clic fuera del Navbar
    useEffect(() => {
        if (!isMenuOpen) return;

        const handleOutsideClick = (e) => {
            if (navbarRef.current && !navbarRef.current.contains(e.target)) {
                closeMenu();
            }
        };

        document.addEventListener('click', handleOutsideClick);
        document.addEventListener('touchstart', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
            document.removeEventListener('touchstart', handleOutsideClick);
        };
    }, [isMenuOpen]);

    // Bloquear scroll del body solo mientras el menú móvil está abierto.
    // Guarda el overflow previo y lo restaura, sin pisar bloqueos ajenos (Loader, Modal).
    useEffect(() => {
        if (!isMenuOpen) return;

        const { style } = document.body;
        const previousOverflow = style.overflow;
        let locked = false;

        const sync = () => {
            const shouldLock = window.innerWidth <= MOBILE_BREAKPOINT;
            if (shouldLock && !locked) {
                style.overflow = 'hidden';
                locked = true;
            } else if (!shouldLock && locked) {
                style.overflow = previousOverflow;
                locked = false;
            }
        };

        sync();
        window.addEventListener('resize', sync);

        return () => {
            window.removeEventListener('resize', sync);
            if (locked) {
                style.overflow = previousOverflow;
            }
        };
    }, [isMenuOpen]);

    // Scroll Spy: Observar qué sección está visible para marcarla en el menú
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { root: null, rootMargin: '-30% 0px -50% 0px', threshold: 0 }
        );

        NAVIGATION_ITEMS.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav ref={navbarRef} className="navbar glass-navbar" aria-label="Navegación principal">
            <div className="navbar-logo">
                <a
                    href="#welcome"
                    onClick={closeMenu}
                    aria-label="LucasEJA, ir al inicio"
                    aria-current={activeSection === 'welcome' ? 'location' : undefined}
                >
                    LucasEJA
                </a>
            </div>

            <button
                ref={menuButtonRef}
                className={`navbar-menu-icon ${isMenuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Cerrar menú principal" : "Abrir menú principal"}
                aria-expanded={isMenuOpen}
                aria-controls="navbar-menu-links"
                type="button"
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            <div
                id="navbar-menu-links"
                className={`navbar-links ${isMenuOpen ? 'open' : ''}`}
            >
                <ul>
                    {MENU_ITEMS.map(({ id, label }) => {
                        const Icon = NAV_ICONS[id];
                        const isActive = activeSection === id;
                        return (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    className={isActive ? 'active' : ''}
                                    aria-current={isActive ? 'location' : undefined}
                                    onClick={closeMenu}
                                >
                                    {Icon && <Icon className="icon" size={20} aria-hidden="true" />}
                                    {label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <div className="navbar-cv-button">
                    <a
                        href={SOCIAL_LINKS.cv}
                        download={CV_FILENAME}
                        title="Descargar CV en PDF"
                        className="cv-btn"
                        onClick={closeMenu}
                    >
                        <FaFileDownload className="icon" size={18} aria-hidden="true" />
                        Mi CV
                    </a>
                </div>
            </div>
        </nav>
    );
};
