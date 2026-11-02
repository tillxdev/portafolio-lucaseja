import { useId, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { CONTACT_INFO, SOCIAL_LINKS } from '../../constants/appData';
import '../../styles/components/Contact.css';

// Canales directos de respaldo (fuente única: constants/appData.js).
const CONTACT_EMAIL = CONTACT_INFO.email;
const WHATSAPP_URL = SOCIAL_LINKS.whatsapp;

const EMAILJS_CONFIG = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
const IS_EMAILJS_CONFIGURED = Object.values(EMAILJS_CONFIG).every(
    (value) => typeof value === 'string' && value.trim() !== ''
);

// Límite: un envío cada 10 s por navegador; bloquea navegadores headless (bots).
const EMAILJS_OPTIONS = {
    publicKey: EMAILJS_CONFIG.publicKey,
    blockHeadless: true,
    limitRate: { id: 'contact-form', throttle: 10000 },
};

if (IS_EMAILJS_CONFIGURED) {
    emailjs.init(EMAILJS_OPTIONS);
}

const MAX_LENGTH = { name: 100, email: 254, subject: 150, message: 2000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

const validate = (data) => {
    const errors = {};
    if (!data.name) errors.name = 'Escribe tu nombre.';
    if (!data.email) {
        errors.email = 'Escribe tu correo electrónico.';
    } else if (!EMAIL_PATTERN.test(data.email)) {
        errors.email = 'El correo electrónico no parece válido.';
    }
    if (!data.subject) errors.subject = 'Escribe un asunto.';
    if (!data.message) errors.message = 'Escribe tu mensaje.';
    return errors;
};

const getErrorText = (error) => error?.text || error?.message || String(error);

export const Contact = () => {
    const [formData, setFormData] = useState(INITIAL_FORM);
    const [honeypot, setHoneypot] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(
        IS_EMAILJS_CONFIGURED
            ? { type: 'idle', text: '' }
            : {
                type: 'warning',
                text: `El formulario no está disponible en este momento. Puedes escribirme directamente a ${CONTACT_EMAIL} o por WhatsApp.`,
            }
    );
    const ids = useId();
    const fieldId = (name) => `${ids}-${name}`;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting || !IS_EMAILJS_CONFIGURED) return;

        // Honeypot: si un bot lo rellenó, se simula éxito sin enviar nada.
        if (honeypot) {
            setFormData(INITIAL_FORM);
            setStatus({ type: 'success', text: '¡Mensaje enviado correctamente! Te responderé pronto.' });
            return;
        }

        const cleaned = {
            name: formData.name.trim().slice(0, MAX_LENGTH.name),
            email: formData.email.trim().slice(0, MAX_LENGTH.email),
            subject: formData.subject.trim().slice(0, MAX_LENGTH.subject),
            message: formData.message.trim().slice(0, MAX_LENGTH.message),
        };

        const validationErrors = validate(cleaned);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setStatus({ type: 'error', text: 'Revisa los campos marcados antes de enviar.' });
            const firstInvalid = Object.keys(validationErrors)[0];
            document.getElementById(fieldId(firstInvalid))?.focus();
            return;
        }

        setIsSubmitting(true);
        setStatus({ type: 'info', text: 'Enviando mensaje…' });

        try {
            await emailjs.send(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.templateId,
                cleaned,
                EMAILJS_OPTIONS
            );
            const text = '¡Mensaje enviado correctamente! Te responderé pronto.';
            toast.success(text);
            setStatus({ type: 'success', text });
            setFormData(INITIAL_FORM);
            setErrors({});
        } catch (error) {
            const isRateLimited = error?.status === 429;
            const text = isRateLimited
                ? 'Acabas de enviar un mensaje. Espera unos segundos antes de intentarlo de nuevo.'
                : `No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme a ${CONTACT_EMAIL}.`;
            if (!isRateLimited) {
                console.error('Error al enviar el formulario de contacto:', getErrorText(error));
            }
            toast.error(text);
            setStatus({ type: 'error', text });
        } finally {
            setIsSubmitting(false);
        }
    };

    const isDisabled = isSubmitting || !IS_EMAILJS_CONFIGURED;

    const renderField = ({ name, label, type = 'text', autoComplete, multiline = false }) => {
        const id = fieldId(name);
        const errorId = `${id}-error`;
        const commonProps = {
            id,
            name,
            value: formData[name],
            onChange: handleChange,
            required: true,
            maxLength: MAX_LENGTH[name],
            disabled: isDisabled,
            className: 'glass-input',
            'aria-invalid': errors[name] ? 'true' : undefined,
            'aria-describedby': errors[name] ? errorId : undefined,
        };

        return (
            <div className="form-group">
                <label htmlFor={id}>
                    {label}{' '}
                    <span className="required-indicator" aria-hidden="true">*</span>
                    <span className="sr-only">(requerido)</span>
                </label>
                {multiline ? (
                    <textarea {...commonProps} rows="5" />
                ) : (
                    <input {...commonProps} type={type} autoComplete={autoComplete} />
                )}
                {errors[name] && (
                    <p id={errorId} className="field-error">
                        {errors[name]}
                    </p>
                )}
            </div>
        );
    };

    return (
        <section id="contact" className="contact-container glass-section section-shell">
            <div className="contact-wrapper">
                <h2>Contáctame</h2>
                <p>Completa el formulario y te responderé lo antes posible.</p>

                <form
                    onSubmit={handleSubmit}
                    className="contact-form glass-form"
                    aria-label="Formulario de contacto"
                    noValidate
                >
                    {renderField({ name: 'name', label: 'Nombre', autoComplete: 'name' })}
                    {renderField({ name: 'email', label: 'Correo electrónico', type: 'email', autoComplete: 'email' })}
                    {renderField({ name: 'subject', label: 'Asunto' })}
                    {renderField({ name: 'message', label: 'Mensaje', multiline: true })}

                    {/* Campo trampa anti-spam: invisible para personas y lectores de pantalla */}
                    <div className="contact-honeypot" aria-hidden="true">
                        <label htmlFor={fieldId('website')}>No rellenes este campo</label>
                        <input
                            type="text"
                            id={fieldId('website')}
                            name="website"
                            tabIndex={-1}
                            autoComplete="off"
                            value={honeypot}
                            onChange={(e) => setHoneypot(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="submit-btn glass-button"
                        disabled={isDisabled}
                        aria-busy={isSubmitting}
                    >
                        {isSubmitting ? 'Enviando…' : 'Enviar'}
                    </button>

                    <p
                        className={`form-status form-status--${status.type}`}
                        role="status"
                        aria-live="polite"
                    >
                        {status.text}
                    </p>
                </form>

                <p className="contact-alternatives">
                    O escríbeme a{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                    {' '}o por{' '}
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        WhatsApp
                        <span className="sr-only"> (se abre en una pestaña nueva)</span>
                    </a>
                    .
                </p>
            </div>
        </section>
    );
};
