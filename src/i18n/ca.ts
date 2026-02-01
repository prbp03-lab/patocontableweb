export default {
    // Navigation
    // SEO
    seo: {
        home: {
            title: 'PatoContable - Aprèn Comptabilitat Jugant',
            description: 'Domina el Pla General Comptable amb el nostre joc educatiu interactiu. Ideal per a estudiants i professionals de la comptabilitat.',
        },
        about: {
            title: 'Sobre Patricia Bustos - PatoContable',
            description: 'Coneix la creadora de PatoContable. Professional amb més de 15 anys d\'experiència en administració i comptabilitat.',
        },
        tools: {
            title: 'Eines Comptables Gratuïtes - PatoContable',
            description: 'Calculadores i cercadors del PGC per facilitar la teva feina comptable diària.',
        },
        gameInfo: {
            title: 'Com jugar a PatoContable - PGC Espanya',
            description: 'Informació sobre la dinàmica del joc, nivells i consells per aprendre comptabilitat de forma divertida.',
        },
        legal: {
            notice: {
                title: 'Avís Legal - PatoContable',
                description: 'Informació legal, titularitat i termes d\'ús del lloc web PatoContable.',
            },
            privacy: {
                title: 'Política de Privacitat - PatoContable',
                description: 'La nostra política sobre el tractament de dades i privacitat a PatoContable.',
            },
            cookies: {
                title: 'Política de Cookies - PatoContable',
                description: 'Informació sobre l\'ús de tecnologies d\'anàlisi i cookies al nostre lloc web.',
            },
        },
    },

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
        next: 'Següent Pregunta',
        hint: 'Pista',
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
            finish: 'Finalitzar Joc',
        },
        feedback: {
            correct: '¡Excel·lent! Resposta correcta.',
            wrong: '¡Gairebé! Repassa el concepte i continua intentant-ho.',
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
            email: 'patoscontables@gmail.com',
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

    // Legal Pages
    legal: {
        notice: {
            title: 'AVÍS LEGAL',
            id: {
                title: 'Dades identificatives',
                content: 'En compliment amb el deure d\'informació recollit en l\'article 10 de la Llei 34/2002, d\'11 de juliol, de Serveis de la Societat de la Informació i del Comerç Electrònic (LSSI-CE), es faciliten les següents dades:',
                owner_label: 'Titular',
                name_label: 'Nom comercial',
                address_label: 'Domicili',
                email_label: 'Email de contacte',
                web_label: 'Lloc Web',
            },
            property: {
                title: 'Propietat Intel·lectual',
                content: 'Els continguts (textos, logotips i imatges com el "Pato") i el software educatiu són propietat de la titular. Queda prohibida la reproducció total o parcial sense autorització prèvia.',
            },
        },
        privacy: {
            title: 'POLÍTICA DE PRIVACITAT',
            intro: 'A Pato Contable ens prenem molt seriosament la teva privacitat.',
            collection: {
                title: 'Recollida de dades',
                content: 'Aquest lloc web no recull ni emmagatzema dades personals dels usuaris (noms, correus o telèfons). No disposem de formularis de registre ni de contacte integrats que emmagatzemin informació en bases de dades.',
            },
            purpose: {
                title: 'Finalitat',
                content: 'El lloc és purament educatiu i informatiu.',
            },
            rights: {
                title: 'Drets',
                content: 'Tot i que no tractem les teves dades, pots contactar amb el titular a patoscontables@gmail.com per a qualsevol dubte sobre la teva privacitat.',
            },
        },
        cookies: {
            title: 'POLÍTICA DE COOKIES',
            intro: 'Aquest lloc web utilitza tecnologies d\'anàlisi per entendre com interactuen els usuaris amb el contingut.',
            analytics: {
                title: 'Vercel Analytics',
                content: 'Utilitzem l\'eina d\'anàlisi del nostre proveïdor d\'allotjament (Vercel Inc.). Aquesta eina no utilitza cookies de rastreig personal ni emmagatzema adreces IP completes. Totes les dades són anònimes i agregades (per exemple: "10 persones han jugat al nivell 1"), la qual cosa ens ajuda a millorar el joc.',
            },
            management: {
                title: 'Gestió de Cookies',
                content: 'En no utilitzar cookies publicitàries ni de seguiment individual, no es requereix un banner de consentiment complex, però pots configurar el teu navegador per bloquejar qualsevol intent d\'emmagatzematge si ho desitges.',
            },
        },
    },

    // Footer
    footer: {
        rights: 'Tots els drets reservats',
        gameRegistered: 'Joc Educatiu registrat a SafeCreative',
        location: 'Granollers, Barcelona',
        legal: {
            notice: 'Avís Legal',
            privacy: 'Privacitat',
            cookies: 'Cookies',
        },
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
