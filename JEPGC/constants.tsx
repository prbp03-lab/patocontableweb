
/**
 * © 2026 PatoContable. Todos los derechos reservados.
 * Propiedad Legal: Patricia Rocio Bustos Paco.
 * Registro Safe Creative ID: 2601234346797.
 */

import { Level, Achievement, PGCAccount } from './types';

export const INITIAL_XP_GOAL = 100;

// IDENTIDAD COMERCIAL VS LEGAL
export const BRAND_CONFIG = {
  author_display: "PatoContable",
  legal_owner: "Patricia Rocio Bustos Paco",
  safe_creative_id: "2601234346797",
  version: "2.1.0-STABLE",
  repo_url: "https://github.com/prbp03-lab/el-desafio-patocontable"
};

// METADATOS INTERNOS
export const METADATA_LEGAL = {
  original_author: BRAND_CONFIG.legal_owner,
  license: "Propiedad Intelectual Protegida",
  registry: BRAND_CONFIG.safe_creative_id,
  timestamp: new Date().toISOString()
};

export const CALENDARIO_FISCAL_PYME = {
  "303": {
    "id": "303",
    "nombre": "Autoliquidación IVA",
    "periodicidad": "Trimestral",
    "meses_presentacion": [4, 7, 10, 1],
    "rango_dias": [1, 20],
    "rango_especial_q4": [1, 30],
    "cuentas_afectadas": ["477", "472", "4750", "4700", "572"],
    "penalizacion_error": 100,
    "descripcion": "Liquida la diferencia entre el IVA repercutido y soportado."
  },
  "111": {
    "id": "111",
    "nombre": "Retenciones IRPF (Nóminas/Profesionales)",
    "periodicidad": "Trimestral",
    "meses_presentacion": [4, 7, 10, 1],
    "rango_dias": [1, 20],
    "cuentas_afectadas": ["4751", "640", "623", "572"],
    "penalizacion_error": 75,
    "descripcion": "Ingreso de retenciones practicadas a terceros."
  },
  "200": {
    "id": "200",
    "nombre": "Declaración Anual Impuesto Sociedades",
    "periodicidad": "Anual",
    "meses_presentacion": [7],
    "rango_dias": [1, 25],
    "cuentas_afectadas": ["6300", "4752", "473", "4709", "4745"],
    "penalizacion_error": 500,
    "descripcion": "Cierre definitivo del impuesto sobre el beneficio del ejercicio."
  }
};

export interface PGCGroupInfo {
  id: number;
  name: string;
  description: string;
  subgroups: { code: string; name: string }[];
}

export const PGC_GROUPS_DETAILED: PGCGroupInfo[] = [
  { id: 1, name: "Financiación Básica", description: "Capital, reservas y deudas a largo plazo.", subgroups: [{ code: "10", name: "Capital" }, { code: "11", name: "Reservas" }, { code: "17", name: "Deudas a L/P" }] },
  { id: 2, name: "Activo no Corriente", description: "Inmovilizado duradero.", subgroups: [{ code: "20", name: "Intangibles" }, { code: "21", name: "Materiales" }, { code: "28", name: "Amortizaciones" }] },
  { id: 3, name: "Existencias", description: "Mercaderías y materias primas.", subgroups: [{ code: "30", name: "Comerciales" }, { code: "31", name: "Materias primas" }] },
  { id: 4, name: "Acreedores y Deudores", description: "Tráfico comercial y administraciones públicas.", subgroups: [{ code: "40", name: "Proveedores" }, { code: "43", name: "Clientes" }, { code: "47", name: "Hacienda Pública" }] },
  { id: 5, name: "Cuentas Financieras", description: "Tesorería e inversiones a C/P.", subgroups: [{ code: "57", name: "Tesorería" }, { code: "52", name: "Deudas a C/P" }] },
  { id: 6, name: "Compras y Gastos", description: "Gastos del ejercicio por naturaleza.", subgroups: [{ code: "60", name: "Compras" }, { code: "62", name: "Servicios" }, { code: "64", name: "Personal" }] },
  { id: 7, name: "Ventas e Ingresos", description: "Ingresos por actividad habitual.", subgroups: [{ code: "70", name: "Ventas" }, { code: "75", name: "Otros ingresos" }] }
];

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  { id: 'first_steps', title: 'Primeros Pasos', description: 'Completa el nivel Junior.', icon: 'child_care', unlocked: false },
  { id: 'balance_master', title: 'Maestro del Balance', description: 'Obtén 100% de precisión en una sesión.', icon: 'account_balance', unlocked: false },
  { id: 'fiscal_ninja', title: 'Ninja Fiscal', description: 'Liquida un Modelo 303 sin errores.', icon: 'receipt_long', unlocked: false }
];
