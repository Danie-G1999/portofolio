import { createI18n } from 'vue-i18n';

// Definir los mensajes para cada idioma
const messages = {
  en: {
    hi: "Hi, I'm ",
    name: 'Daniel',
    changeLanguage: 'Change Language',
    services: 'Services',
    about: 'About',
    skills: 'Skills',
    contact: 'Contact',
    description_initial: 'Software developer with 5+ years in web development. Expert in scalable digital solutions, creative, precise, and efficient. Values teamwork and discipline.'
  },
  es: {
    hi: 'Hola, Soy ',
    name: 'Daniel',
    changeLanguage: 'Cambiar idioma',
    services: 'Servicios',
    about: 'Acerca de',
    skills: 'Habilidades',
    contact: 'Contacto',
    description_initial: 'Desarrollador de software con más de 5 años en desarrollo web. Experto en soluciones digitales escalables, creativas, precisas y eficientes. Valora el trabajo en equipo y la disciplina.'
  },
};

// Crear una instancia de i18n
const i18n = createI18n({
  locale: 'en', // Idioma predeterminado
  fallbackLocale: 'es', // Idioma de respaldo
  messages,
});

export default i18n;
