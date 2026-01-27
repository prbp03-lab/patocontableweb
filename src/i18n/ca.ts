export default {
    // Navigation
    nav: {
        home: 'Inici',
        about: 'Sobre Mi',
        tools: 'Eines',
        gameInfo: 'Sobre el Joc',
    },

    // Home Page
    home: {
        badge: 'Joc Educatiu Comptable',
        title: 'PatoContable',
        subtitle: 'Aprèn el Pla General Comptable jugant',
        description: 'Domina la comptabilitat espanyola de forma interactiva i divertida. Practica amb casos reals, desafia els teus coneixements i converteix-te en un expert del PGC.',
        playButton: '🎮 Jugar Ara!',
        learnMore: 'Més Informació',
        features: {
            title: 'Característiques del Joc',
            interactive: {
                title: 'Aprenentatge Interactiu',
                description: 'Aprèn fent amb exercicis pràctics i casos reals del PGC espanyol.',
            },
            levels: {
                title: 'Nivells Progressius',
                description: 'Des de conceptes bàsics fins a casos avançats de comptabilitat fiscal.',
            },
            realTime: {
                title: 'Feedback Immediat',
                description: 'Rep explicacions detallades de cada resposta per millorar la teva comprensió.',
            },
            comprehensive: {
                title: 'Contingut Complet',
                description: 'Més de 100 preguntes cobrint tots els grups del PGC i models fiscals.',
            },
        },
    },

    // Game
    game: {
        selectLevel: 'Selecciona el teu Nivell',
        question: 'Pregunta',
        finish: 'Finalitzar Joc',
        next: 'Següent Pregunta',
        difficulty: {
            easy: 'Conceptes Bàsics',
            medium: 'Dinàmica Comptable',
            hard: 'Casos Avançats',
        },
        results: {
            title: '¡Sessió Completada!',
            correct: 'Respostes Correctes',
            percentage: 'Precisió',
            playAgain: 'Jugar de Nou',
        },
    },

    // About Page
    about: {
        title: 'Sobre Mi',
        badge: 'Experta en IA Comptable',
        subtitle: 'Administrativa Comptable & Especialista en IA',
        description: 'Sóc una professional administrativa amb més de 15 anys d\'experiència en gestió comptable i atenció al client. Especialitzada en sistemes ERP (SAGE, SAP, Dynamics 365) i IA.',
        downloadCV: 'Descarregar CV',
        cvLink: '/img/CV_Patricia_CA.pdf',
        experience: {
            title: 'Experiència Professional',
            items: [
                {
                    year: '2025',
                    role: 'Administrativa Comptable',
                    company: 'Comptable Vallès 222 SL',
                    description: 'Facturació, gestió hotelera i SAGE 200.',
                },
                {
                    year: '2008-2023',
                    role: 'Atenció al Client',
                    company: 'Bon Preu S.A.',
                    description: 'Gestió d\'equips i reclamacions.',
                },
                {
                    year: '2000-2007',
                    role: 'Administrativa',
                    company: 'Avicons S.A.',
                    description: 'Gestió documental i tasques administratives generals.',
                },
            ],
        },
        education: {
            title: 'Formació Acadèmica',
            items: [
                {
                    year: '2025',
                    title: 'C.P. Gestió Administrativa',
                    institution: "BIT'S (800h)",
                },
                {
                    year: '2025',
                    title: 'Nòmines i Seg. Social',
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
            title: 'Competències',
            items: ['SAGE 200', 'SAP Business One', 'Dynamics 365', 'IA & Prompting', 'Fiscalitat', 'Comptabilitat'],
        },
        languages: {
            title: 'Idiomes',
            items: [
                { name: 'Castellà', level: 'Natiu' },
                { name: 'Català', level: 'Avançat' },
                { name: 'Italià', level: 'Inicial' },
            ],
        },
        other: {
            title: 'Altres Dades',
            driver: 'Carnet B i Vehicle propi',
        },
        contact: {
            title: 'Contacta amb mi',
            email: 'patriadmconta@outlook.com',
            location: 'Granollers, 08402 • Barcelona',
            linkedin: 'LinkedIn',
        },
    },

    // Tools Page
    tools: {
        title: 'Eines Comptables',
        pgc: {
            tab: 'Base de Dades PGC',
            title: 'Pla General Comptable Espanyol',
            search: 'Cercar per codi o nom...',
            filters: {
                all: 'Tots',
                group: 'Grup',
                nature: 'Naturalesa',
                statement: 'Estat Financer',
            },
            table: {
                code: 'Codi',
                name: 'Denominació',
                nature: 'Naturalesa',
                group: 'Grup',
                statement: 'Estat',
                actions: 'Accions',
            },
            nature: {
                deudora: 'Deutora',
                acreedora: 'Credora',
                variable: 'Variable',
            },
            statement: {
                balance: 'Balanç',
                pyg: 'PyG',
                ecpn: 'ECPN',
            },
            groups: {
                1: 'Finançament Bàsic',
                2: 'Actiu No Corrent',
                3: 'Existències',
                4: 'Creditors i Deutors',
                5: 'Comptes Financers',
                6: 'Compres i Despeses',
                7: 'Vendes i Ingressos',
                8: 'Despeses Imputades al PN',
                9: 'Ingressos Imputats al PN',
            },
            detail: {
                title: 'Detall de Compte',
                description: 'Descripció',
                fiscalModels: 'Models Fiscals',
                counterparts: 'Contrapartides Comunes',
                journalExample: 'Exemple d\'Assentament',
                debe: 'Deu',
                haber: 'Haver',
            },
            export: 'Exportar',
            noResults: 'No s\'han trobat resultats',
        },
        calendar: {
            tab: 'Calendari Fiscal',
            title: 'Calendari d\'Obligacions Fiscals',
            quarterly: 'Declaracions Trimestrals',
            annual: 'Declaracions Anuals',
            categories: {
                iva: 'IVA',
                irpf: 'IRPF',
                sociedades: 'Societats',
                informativa: 'Informativa',
            },
            months: [
                'Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny',
                'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre',
            ],
            quarters: {
                q1: '1r Trimestre',
                q2: '2n Trimestre',
                q3: '3r Trimestre',
                q4: '4t Trimestre',
            },
            deadline: 'Termini',
            accounts: 'Comptes Implicats',
            description: 'Descripció',
        },
    },

    // Game Info Page
    gameInfo: {
        title: 'Sobre el Joc Educatiu',
        subtitle: 'PatoContable - Aprèn Comptabilitat de Forma Interactiva',
        about: {
            title: 'Què és PatoContable?',
            description: 'PatoContable és un joc educatiu dissenyat per facilitar l\'aprenentatge del Pla General Comptable espanyol. A través de preguntes interactives i casos pràctics, els estudiants i professionals poden dominar els conceptes comptables de forma amena i efectiva.',
        },
        objectives: {
            title: 'Objectius Pedagògics',
            items: [
                'Comprendre l\'estructura del Pla General Comptable espanyol',
                'Identificar correctament els comptes comptables i la seva naturalesa',
                'Dominar els assentaments comptables bàsics i avançats',
                'Conèixer les obligacions fiscals i els seus terminis',
                'Aplicar coneixements en casos pràctics reals',
            ],
        },
        methodology: {
            title: 'Metodologia',
            description: 'El joc utilitza una metodologia d\'aprenentatge progressiu amb tres nivells de dificultat. Cada pregunta inclou feedback immediat i explicacions detallades per reforçar l\'aprenentatge.',
        },
        copyright: {
            title: 'Drets d\'Autor',
            description: 'Aquest joc educatiu està registrat a SafeCreative i protegit per drets d\'autor.',
            registered: 'Registrat a SafeCreative',
            viewCertificate: 'Veure Certificat',
        },
        credits: {
            title: 'Crèdits',
            author: 'Creat per Patricia Bustos',
            year: '© 2026 PatoContable',
        },
    },

    // Footer
    footer: {
        rights: 'Tots els drets reservats',
        gameRegistered: 'Joc Educatiu registrat a SafeCreative',
        location: 'Granollers, Barcelona',
    },

    // Common
    common: {
        loading: 'Carregant...',
        error: 'Error',
        success: 'Èxit',
        close: 'Tancar',
        save: 'Desar',
        cancel: 'Cancel·lar',
        delete: 'Eliminar',
        edit: 'Editar',
        view: 'Veure',
        download: 'Descarregar',
        search: 'Cercar',
        filter: 'Filtrar',
        reset: 'Restablir',
        next: 'Següent',
        previous: 'Anterior',
        finish: 'Finalitzar',
    },
};
