import { FiscalDeclaration } from '../types';

/**
 * Calendario Fiscal para PYMES en España
 * Basado en SKILL.md - Sección de Obligaciones Fiscales
 * 
 * Incluye:
 * - Declaraciones trimestrales (IVA, IRPF)
 * - Pagos fraccionados (Impuesto sobre Sociedades)
 * - Declaraciones anuales e informativas
 */

export const fiscalCalendar: FiscalDeclaration[] = [
    // IVA
    {
        model: '303',
        name: 'Autoliquidación trimestral del IVA',
        nameCA: 'Autoliquidació trimestral de l\'IVA',
        type: 'Trimestral',
        category: 'IVA',
        deadlines: [
            { quarter: 1, month: 4, dayStart: 1, dayEnd: 20 },
            { quarter: 2, month: 7, dayStart: 1, dayEnd: 20 },
            { quarter: 3, month: 10, dayStart: 1, dayEnd: 20 },
            { quarter: 4, month: 1, dayStart: 1, dayEnd: 30 },
        ],
        accounts: ['477', '472', '4750', '4700', '572'],
        description: 'Liquida la diferencia entre el IVA repercutido en ventas y el soportado en compras.',
        descriptionCA: 'Liquida la diferència entre l\'IVA repercutit en vendes i el suportat en compres.',
    },
    {
        model: '390',
        name: 'Resumen anual de IVA',
        nameCA: 'Resum anual d\'IVA',
        type: 'Anual',
        category: 'IVA',
        deadlines: [
            { month: 1, dayStart: 1, dayEnd: 30 },
        ],
        accounts: ['477', '472', '4750', '4700'],
        description: 'Declaración informativa de resumen anual de todas las operaciones relativas a la liquidación del IVA.',
        descriptionCA: 'Declaració informativa de resum anual de totes les operacions relatives a la liquidació de l\'IVA.',
    },

    // IRPF - Retenciones
    {
        model: '111',
        name: 'Retenciones IRPF - Trabajo y Actividades Económicas',
        nameCA: 'Retencions IRPF - Treball i Activitats Econòmiques',
        type: 'Trimestral',
        category: 'IRPF',
        deadlines: [
            { quarter: 1, month: 4, dayStart: 1, dayEnd: 20 },
            { quarter: 2, month: 7, dayStart: 1, dayEnd: 20 },
            { quarter: 3, month: 10, dayStart: 1, dayEnd: 20 },
            { quarter: 4, month: 1, dayStart: 1, dayEnd: 20 },
        ],
        accounts: ['640', '623', '4751', '572'],
        description: 'Autoliquidación trimestral de las retenciones del IRPF practicadas sobre rendimientos del trabajo y de actividades económicas.',
        descriptionCA: 'Autoliquidació trimestral de les retencions de l\'IRPF practicades sobre rendiments del treball i d\'activitats econòmiques.',
    },
    {
        model: '115',
        name: 'Retenciones IRPF - Arrendamientos',
        nameCA: 'Retencions IRPF - Arrendaments',
        type: 'Trimestral',
        category: 'IRPF',
        deadlines: [
            { quarter: 1, month: 4, dayStart: 1, dayEnd: 20 },
            { quarter: 2, month: 7, dayStart: 1, dayEnd: 20 },
            { quarter: 3, month: 10, dayStart: 1, dayEnd: 20 },
            { quarter: 4, month: 1, dayStart: 1, dayEnd: 20 },
        ],
        accounts: ['621', '4751', '572'],
        description: 'Autoliquidación trimestral de las retenciones del IRPF sobre rendimientos procedentes del arrendamiento de inmuebles urbanos.',
        descriptionCA: 'Autoliquidació trimestral de les retencions de l\'IRPF sobre rendiments procedents de l\'arrendament d\'immobles urbans.',
    },
    {
        model: '190',
        name: 'Resumen anual de retenciones IRPF',
        nameCA: 'Resum anual de retencions IRPF',
        type: 'Anual',
        category: 'IRPF',
        deadlines: [
            { month: 2, dayStart: 1, dayEnd: 2 },
        ],
        accounts: ['640', '623', '4751'],
        description: 'Resumen anual de las retenciones del IRPF (Modelo 111). Se identifica a cada perceptor y el total de las retenciones practicadas.',
        descriptionCA: 'Resum anual de les retencions de l\'IRPF (Model 111). S\'identifica a cada perceptor i el total de les retencions practicades.',
    },
    {
        model: '180',
        name: 'Resumen anual de retenciones sobre alquileres',
        nameCA: 'Resum anual de retencions sobre lloguers',
        type: 'Anual',
        category: 'IRPF',
        deadlines: [
            { month: 1, dayStart: 1, dayEnd: 31 },
        ],
        accounts: ['621', '4751'],
        description: 'Resumen anual de las retenciones sobre alquileres (Modelo 115). Se identifica a cada arrendador y el total de las retenciones practicadas.',
        descriptionCA: 'Resum anual de les retencions sobre lloguers (Model 115). S\'identifica a cada arrendador i el total de les retencions practicades.',
    },

    // Impuesto sobre Sociedades
    {
        model: '202',
        name: 'Pago fraccionado del Impuesto sobre Sociedades',
        nameCA: 'Pagament fraccionat de l\'Impost sobre Societats',
        type: 'Trimestral',
        category: 'Sociedades',
        deadlines: [
            { quarter: 1, month: 4, dayStart: 1, dayEnd: 20 },
            { quarter: 3, month: 10, dayStart: 1, dayEnd: 20 },
            { quarter: 4, month: 12, dayStart: 1, dayEnd: 20 },
        ],
        accounts: ['473', '572', '4752'],
        description: 'Pago fraccionado a cuenta del Impuesto sobre Sociedades. Es un adelanto del impuesto anual calculado sobre los beneficios del ejercicio en curso.',
        descriptionCA: 'Pagament fraccionat a compte de l\'Impost sobre Societats. És un avançament de l\'impost anual calculat sobre els beneficis de l\'exercici en curs.',
    },
    {
        model: '200',
        name: 'Declaración anual del Impuesto sobre Sociedades',
        nameCA: 'Declaració anual de l\'Impost sobre Societats',
        type: 'Anual',
        category: 'Sociedades',
        deadlines: [
            { month: 7, dayStart: 1, dayEnd: 25 },
        ],
        accounts: ['6300', '4752', '473', '4709', '4745'],
        description: 'Declaración anual del Impuesto sobre Sociedades. Liquida el impuesto definitivo sobre los beneficios obtenidos por la empresa durante el ejercicio fiscal.',
        descriptionCA: 'Declaració anual de l\'Impost sobre Societats. Liquida l\'impost definitiu sobre els beneficis obtinguts per l\'empresa durant l\'exercici fiscal.',
    },

    // Declaraciones Informativas
    {
        model: '347',
        name: 'Declaración anual de operaciones con terceros',
        nameCA: 'Declaració anual d\'operacions amb tercers',
        type: 'Anual',
        category: 'Informativa',
        deadlines: [
            { month: 2, dayStart: 1, dayEnd: 28 },
        ],
        accounts: ['430', '400'],
        description: 'Declaración anual de operaciones con terceras personas (clientes o proveedores) cuyo importe total durante el año natural haya superado los 3.005,06 euros.',
        descriptionCA: 'Declaració anual d\'operacions amb terceres persones (clients o proveïdors) l\'import total de les quals durant l\'any natural hagi superat els 3.005,06 euros.',
    },
];

export default fiscalCalendar;
