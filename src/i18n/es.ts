export default {
    // Navigation
    // SEO
    seo: {
        home: {
            title: 'PatoContable - Aprende Contabilidad Jugando',
            description: 'Domina el Plan General Contable con nuestro juego educativo interactivo. Ideal para estudiantes y profesionales de la contabilidad.',
        },
        about: {
            title: 'Sobre Patricia Bustos - PatoContable',
            description: 'Conoce a la creadora de PatoContable. Profesional con más de 15 años de experiencia en administración y contabilidad.',
        },
        tools: {
            title: 'Herramientas Contables Gratuitas - PatoContable',
            description: 'Calculadoras y buscadores del PGC para facilitar tu trabajo contable diario.',
        },
        gameInfo: {
            title: 'Cómo jugar a PatoContable - PGC España',
            description: 'Información sobre la dinámica del juego, niveles y consejos para aprender contabilidad de forma divertida.',
        },
        legal: {
            notice: {
                title: 'Aviso Legal - PatoContable',
                description: 'Información legal, titularidad y términos de uso del sitio web PatoContable.',
            },
            privacy: {
                title: 'Política de Privacidad - PatoContable',
                description: 'Nuestra política sobre el tratamiento de datos y privacidad en PatoContable.',
            },
            cookies: {
                title: 'Política de Cookies - PatoContable',
                description: 'Información sobre el uso de tecnologías de análisis y cookies en nuestro sitio web.',
            },
        },
    },

    nav: {
        home: 'Inicio',
        about: 'Sobre Mí',
        tools: 'Herramientas',
        gameInfo: 'Acerca del Juego',
    },

    // Home Page
    home: {
        badge: 'Juego Educativo Contable',
        title: 'PatoContable',
        subtitle: 'Aprende el Plan General Contable jugando',
        description: 'Domina la contabilidad española de forma interactiva y divertida. Practica con casos reales, desafía tus conocimientos y conviértete en un experto del PGC.',
        playButton: '🎮 ¡Jugar Ahora!',
        learnMore: 'Más Información',
        features: {
            title: 'Características del Juego',
            interactive: {
                title: 'Aprendizaje Interactivo',
                description: 'Aprende haciendo con ejercicios prácticos y casos reales del PGC español.',
            },
            levels: {
                title: 'Niveles Progresivos',
                description: 'Desde conceptos básicos hasta casos avanzados de contabilidad fiscal.',
            },
            realTime: {
                title: 'Feedback Inmediato',
                description: 'Recibe explicaciones detalladas de cada respuesta para mejorar tu comprensión.',
            },
            comprehensive: {
                title: 'Contenido Completo',
                description: 'Más de 100 preguntas cubriendo todos los grupos del PGC y modelos fiscales.',
            },
        },
    },

    // Game
    game: {
        selectLevel: 'Selecciona tu Nivel',
        question: 'Pregunta',
        next: 'Siguiente Pregunta',
        difficulty: {
            easy: 'Conceptos Básicos',
            medium: 'Dinámica Contable',
            hard: 'Casos Avanzados',
        },
        results: {
            title: '¡Sesión Completada!',
            correct: 'Respuestas Correctas',
            percentage: 'Precisión',
            playAgain: 'Jugar de Nuevo',
            finish: 'Finalizar Juego',
        },
        feedback: {
            correct: '¡Excelente! Respuesta correcta.',
            wrong: '¡Casi! Repasa el concepto y sigue intentándolo.',
        },
    },

    // About Page
    about: {
        title: 'Sobre Mí',
        badge: 'Especialista en IA Contable',
        subtitle: 'Administrativa Contable & Especialista en IA',
        description: 'Soy una profesional administrativa con más de 15 años de experiencia en gestión contable y atención al cliente. Especializada en sistemas ERP (SAGE, SAP, Dynamics 365) e IA.',
        downloadCV: 'Descargar CV',
        cvLink: '/img/CV_Patricia_ES.pdf',
        experience: {
            title: 'Experiencia Profesional',
            items: [
                {
                    year: '2025',
                    role: 'Administrativa Contable',
                    company: 'Contable Vallès 222 SL',
                    description: 'Facturación, gestión hotelera y SAGE 200.',
                },
                {
                    year: '2008-2023',
                    role: 'Atención al Cliente',
                    company: 'Bon Preu S.A.',
                    description: 'Gestión de equipos y reclamaciones.',
                },
                {
                    year: '2000-2007',
                    role: 'Administrativa',
                    company: 'Avicons S.A.',
                    description: 'Gestión documental y tareas administrativas generales.',
                },
            ],
        },
        education: {
            title: 'Formación Académica',
            items: [
                {
                    year: '2025',
                    title: 'C.P. Gestión Administrativa',
                    institution: "BIT'S (800h)",
                },
                {
                    year: '2025',
                    title: 'Nóminas y Seg. Social',
                    institution: "BIT'S",
                },
                {
                    year: '2025',
                    title: 'ACTIC Mitjà',
                    institution: 'Gen. Catalunya',
                },
            ],
        },
        skills: {
            title: 'Competencias',
            items: ['SAGE 200', 'SAP Business One', 'Dynamics 365', 'IA & Prompting', 'Fiscalidad', 'Contabilidad'],
        },
        languages: {
            title: 'Idiomas',
            items: [
                { name: 'Castellano', level: 'Nativo' },
                { name: 'Catalán', level: 'Avanzado' },
                { name: 'Italiano', level: 'Inicial' },
            ],
        },
        other: {
            title: 'Otros Datos',
            driver: 'Carnet B y Vehículo propio',
        },
        contact: {
            title: 'Contacta conmigo',
            email: 'patocontable@outlook.com',
            location: 'Granollers, 08402 • Barcelona',
            linkedin: 'LinkedIn',
        },
    },

    // Tools Page
    tools: {
        title: 'Herramientas Contables',
        pgc: {
            tab: 'Base de Datos PGC',
            title: 'Plan General Contable Español',
            search: 'Buscar por código o nombre...',
            filters: {
                all: 'Todos',
                group: 'Grupo',
                nature: 'Naturaleza',
                statement: 'Estado Financiero',
            },
            table: {
                code: 'Código',
                name: 'Denominación',
                nature: 'Naturaleza',
                group: 'Grupo',
                statement: 'Estado',
                actions: 'Acciones',
            },
            nature: {
                deudora: 'Deudora',
                acreedora: 'Acreedora',
                variable: 'Variable',
            },
            statement: {
                balance: 'Balance',
                pyg: 'PyG',
                ecpn: 'ECPN',
            },
            groups: {
                1: 'Financiación Básica',
                2: 'Activo No Corriente',
                3: 'Existencias',
                4: 'Acreedores y Deudores',
                5: 'Cuentas Financieras',
                6: 'Compras y Gastos',
                7: 'Ventas e Ingresos',
                8: 'Gastos Imputados al PN',
                9: 'Ingresos Imputados al PN',
            },
            detail: {
                title: 'Detalle de Cuenta',
                description: 'Descripción',
                fiscalModels: 'Modelos Fiscales',
                counterparts: 'Contrapartidas Comunes',
                journalExample: 'Ejemplo de Asiento',
                debe: 'Debe',
                haber: 'Haber',
            },
            export: 'Exportar',
            noResults: 'No se encontraron resultados',
        },
        calendar: {
            tab: 'Calendario Fiscal',
            title: 'Calendario de Obligaciones Fiscales',
            quarterly: 'Declaraciones Trimestrales',
            annual: 'Declaraciones Anuales',
            categories: {
                iva: 'IVA',
                irpf: 'IRPF',
                sociedades: 'Sociedades',
                informativa: 'Informativa',
            },
            months: [
                'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
            ],
            quarters: {
                q1: '1er Trimestre',
                q2: '2º Trimestre',
                q3: '3er Trimestre',
                q4: '4º Trimestre',
            },
            deadline: 'Plazo',
            accounts: 'Cuentas Implicadas',
            description: 'Descripción',
        },
    },

    // Game Info Page
    gameInfo: {
        title: 'Acerca del Juego Educativo',
        subtitle: 'PatoContable - Aprende Contabilidad de Forma Interactiva',
        about: {
            title: '¿Qué es PatoContable?',
            description: 'PatoContable es un juego educativo diseñado para facilitar el aprendizaje del Plan General Contable español. A través de preguntas interactivas y casos prácticos, los estudiantes y profesionales pueden dominar los conceptos contables de forma amena y efectiva.',
        },
        objectives: {
            title: 'Objetivos Pedagógicos',
            items: [
                'Comprender la estructura del Plan General Contable español',
                'Identificar correctamente las cuentas contables y su naturaleza',
                'Dominar los asientos contables básicos y avanzados',
                'Conocer las obligaciones fiscales y sus plazos',
                'Aplicar conocimientos en casos prácticos reales',
            ],
        },
        methodology: {
            title: 'Metodología',
            description: 'El juego utiliza una metodología de aprendizaje progresivo con tres niveles de dificultad. Cada pregunta incluye feedback inmediato y explicaciones detalladas para reforzar el aprendizaje.',
        },
        copyright: {
            title: 'Derechos de Autor',
            description: 'Este juego educativo está registrado en SafeCreative y protegido por derechos de autor.',
            registered: 'Registrado en SafeCreative',
            viewCertificate: 'Ver Certificado',
        },
        credits: {
            title: 'Créditos',
            author: 'Creado por Patricia Bustos',
            year: '© 2026 PatoContable',
        },
    },

    // Legal Pages
    legal: {
        notice: {
            title: 'AVISO LEGAL',
            id: {
                title: 'Datos identificativos',
                content: 'En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos:',
                owner_label: 'Titular',
                name_label: 'Nombre comercial',
                address_label: 'Domicilio',
                email_label: 'Email de contacto',
                web_label: 'Sitio Web',
            },
            property: {
                title: 'Propiedad Intelectual',
                content: 'Los contenidos (textos, logotipos e imágenes como el "Pato") y el software educativo son propiedad de la titular. Queda prohibida la reproducción total o parcial sin autorización previa.',
            },
        },
        privacy: {
            title: 'POLÍTICA DE PRIVACIDAD',
            intro: 'En Pato Contable nos tomamos muy en serio tu privacidad.',
            collection: {
                title: 'Recogida de datos',
                content: 'Este sitio web no recoge ni almacena datos personales de los usuarios (nombres, correos o teléfonos). No disponemos de formularios de registro ni de contacto integrados que almacenen información en bases de datos.',
            },
            purpose: {
                title: 'Finalidad',
                content: 'El sitio es puramente educativo e informativo.',
            },
            rights: {
                title: 'Derechos',
                content: 'Aunque no tratamos tus datos, puedes contactar con el titular en patocontable@outlook.com para cualquier duda sobre tu privacidad.',
            },
        },
        cookies: {
            title: 'POLÍTICA DE COOKIES',
            intro: 'Este sitio web utiliza tecnologías de análisis para entender cómo interactúan los usuarios con el contenido.',
            analytics: {
                title: 'Vercel Analytics',
                content: 'Utilizamos la herramienta de análisis de nuestro proveedor de alojamiento (Vercel Inc.). Esta herramienta no utiliza cookies de rastreo personal ni almacena direcciones IP completas. Todos los datos son anónimos y agregados (por ejemplo: "10 personas han jugado al nivel 1"), lo que nos ayuda a mejorar el juego.',
            },
            management: {
                title: 'Gestión de Cookies',
                content: 'Al no utilizar cookies publicitarias ni de seguimiento individual, no se requiere un banner de consentimiento complejo, pero puedes configurar tu navegador para bloquear cualquier intento de almacenamiento si lo deseas.',
            },
        },
    },

    // Footer
    footer: {
        rights: 'Todos los derechos reservados',
        gameRegistered: 'Juego Educativo registrado en SafeCreative',
        location: 'Granollers, Barcelona',
        legal: {
            notice: 'Aviso Legal',
            privacy: 'Privacidad',
            cookies: 'Cookies',
        },
    },

    // Common
    common: {
        loading: 'Cargando...',
        error: 'Error',
        success: 'Éxito',
        close: 'Cerrar',
        save: 'Guardar',
        cancel: 'Cancelar',
        delete: 'Eliminar',
        edit: 'Editar',
        view: 'Ver',
        download: 'Descargar',
        search: 'Buscar',
        filter: 'Filtrar',
        reset: 'Restablecer',
        next: 'Siguiente',
        previous: 'Anterior',
        finish: 'Finalizar',
    },
};
