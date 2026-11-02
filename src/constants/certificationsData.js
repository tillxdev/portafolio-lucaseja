import { MdAdminPanelSettings, MdComputer } from 'react-icons/md';
import { FaDatabase } from 'react-icons/fa';

// Orden: primero lo más cercano a sistemas/TI; al final lo no técnico.
export const CERTIFICATIONS_DATA = [
    {
        id: 3,
        title: "Sistema Integrado de Gestión Administrativa - SIGA",
        institution: "INGEDUCA",
        duration: "200 horas",
        startDate: "29 de abril de 2024",
        endDate: "28 de junio de 2024",
        certificateUrl: "https://drive.google.com/file/d/1Fjpm3DwvdkMUwuPPWV_6qQOzRDAUAb_3/view?usp=sharing",
        skills: ["SIGA", "Gestión Administrativa", "Sistemas de Información"],
        category: "administration",
        status: "completed",
        icon: FaDatabase
    },
    {
        id: 2,
        title: "Ofimática Profesional",
        institution: "INGEDUCA",
        duration: "280 horas",
        startDate: "28 de octubre de 2024",
        endDate: "20 de enero de 2025",
        certificateUrl: "https://drive.google.com/file/d/1GEF7On2rIaCTWxwgj2W-ZC9SFaj-zXYL/view?usp=sharing",
        skills: ["Microsoft Office", "Excel Avanzado", "PowerPoint", "Word"],
        category: "office",
        status: "completed",
        icon: MdComputer
    },
    {
        id: 1,
        title: "Gestión Pública",
        institution: "INGEDUCA",
        duration: "200 horas",
        startDate: "19 de agosto de 2024",
        endDate: "18 de octubre de 2024",
        certificateUrl: "https://drive.google.com/file/d/1aEG4QnRGkSqbeBYTJESgPs38QfrQ_HrN/view?usp=sharing",
        skills: ["Gestión Pública", "Administración", "Políticas Públicas"],
        category: "management",
        status: "completed",
        icon: MdAdminPanelSettings
    }
];
