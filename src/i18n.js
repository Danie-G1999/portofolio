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
    contact_me: 'Contact Me',
    download_pdf: 'Download resume',
    my_services: 'My Services',
    web_development: 'Web Development',
    web_desing: 'Web Desing',
    description_initial: 'Software developer with 5+ years in web development. Expert in scalable digital solutions, creative, precise, and efficient. Values teamwork and discipline.',
    description_software: 'I offer software development services focused on creating tailored digital solutions using modern technologies and efficient practices. I specialize in building robust, scalable, and well-structured applications that meet the specific needs of each project. My goal is to transform ideas into high-quality digital products, with a focus on creativity, precision, and effective collaboration.',
    description_design: 'I offer web design services focused on creating attractive, functional, and tailored websites to meet the needs of each project. My approach combines modern aesthetics with an intuitive user experience, ensuring that each design is not only visually stunning but also efficient and responsive across all devices. I transform ideas into unique websites that stand out and reflect your brands identity.'
  },
  es: {
    hi: 'Hola, Soy ',
    name: 'Daniel',
    changeLanguage: 'Cambiar idioma',
    services: 'Servicios',
    about: 'Acerca de',
    skills: 'Habilidades',
    contact: 'Contacto',
    contact_me: 'Contactame',
    download_pdf: 'Descargar currículum',
    my_services: 'Mis Servicios',
    web_development: 'Desarrollo Web',
    web_desing: 'Diseño Web',
    description_initial: 'Desarrollador de software con más de 5 años en desarrollo web. Experto en soluciones digitales escalables, creativas, precisas y eficientes. Valora el trabajo en equipo y la disciplina.',
    description_software: 'Ofrezco servicios de desarrollo de software enfocados en la creación de soluciones digitales personalizadas utilizando tecnologías modernas y prácticas eficientes. Me especializo en la construcción de aplicaciones robustas, escalables y bien estructuradas que satisfagan las necesidades específicas de cada proyecto. Mi objetivo es transformar ideas en productos digitales de alta calidad, con un enfoque en la creatividad, la precisión y la colaboración efectiva.',
    description_design: 'Ofrezco servicios de diseño web enfocados a crear sitios web atractivos, funcionales y personalizados para satisfacer las necesidades de cada proyecto. Mi enfoque combina una estética moderna con una experiencia de usuario intuitiva, asegurando que cada diseño no solo sea visualmente impresionante sino también eficiente y receptivo en todos los dispositivos. Transformo ideas en sitios web únicos que se destacan y reflejan la identidad de tu marca.'
  },
};

// Crear una instancia de i18n
const i18n = createI18n({
  locale: 'en', // Idioma predeterminado
  fallbackLocale: 'es', // Idioma de respaldo
  messages,
});

export default i18n;
