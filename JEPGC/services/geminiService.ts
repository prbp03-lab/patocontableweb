
/**
 * Propiedad Intelectual de Patricia Rocio Bustos Paco.
 * Adaptación de IA para los 3 niveles de dificultad profesional.
 */

import { GoogleGenAI, Type } from "@google/genai";
import { Level, Question } from "../types";
import { BRAND_CONFIG } from "../constants";

// Base de datos local de cuentas (Diccionario Maestro)
export const LOCAL_PGC_DB: Record<string, any> = {
  "100": { definition: "Capital social: Aportaciones de los socios.", nature: "Acreedora", statement: "Balance (PN)", fiscalModel: "Constitución", counterparts: ["103", "572"], debe: "Reducciones de capital", haber: "Emisión y suscripción", tips: "Aumenta el Patrimonio Neto." },
  "472": { definition: "H.P. IVA soportado.", nature: "Deudora", statement: "Balance (Activo C)", fiscalModel: "Modelo 303", counterparts: ["477", "4750"], debe: "IVA en compras", haber: "Liquidación trimestral", tips: "Derecho a deducir el impuesto." },
  "477": { definition: "H.P. IVA repercutido.", nature: "Acreedora", statement: "Balance (Pasivo C)", fiscalModel: "Modelo 303", counterparts: ["472", "4750"], debe: "Liquidación trimestral", haber: "IVA en ventas", tips: "Obligación de pago a Hacienda." },
  "572": { definition: "Bancos e instituciones de crédito.", nature: "Deudora", statement: "Balance (Activo C)", fiscalModel: "Tesorería", counterparts: ["430", "400", "570"], debe: "Ingresos y cobros", haber: "Pagos y transferencias", tips: "Representa liquidez inmediata." },
  "600": { definition: "Compras de mercaderías.", nature: "Deudora", statement: "P&G", fiscalModel: "Explotación", counterparts: ["400", "572"], debe: "Importe de las compras", haber: "Devoluciones o Rappels", tips: "Afecta al resultado del ejercicio." }
};

export const FALLBACK_QUESTIONS: Record<number, Question[]> = {
  [Level.JUNIOR]: [
    { id: "j1", text: "¿A qué grupo pertenecen las Inmovilizaciones Materiales?", options: ["Grupo 1", "Grupo 2", "Grupo 5", "Grupo 6"], correctAnswer: 1, explanation: "El Grupo 2 recoge el Activo No Corriente (Inmovilizado).", points: 20, category: "Teoría" },
    { id: "j2", text: "El Grupo 1 del PGC se refiere a:", options: ["Financiación Básica", "Activo Corriente", "Gastos", "Ingresos"], correctAnswer: 0, explanation: "El Grupo 1 incluye el Capital y Deudas a Largo Plazo.", points: 20, category: "Teoría" },
    { id: "j3", text: "¿En qué grupo están las Cuentas Financieras (Tesorería)?", options: ["Grupo 3", "Grupo 4", "Grupo 5", "Grupo 2"], correctAnswer: 2, explanation: "El Grupo 5 recoge tesorería y deudas a corto plazo.", points: 20, category: "Teoría" },
    { id: "j4", text: "¿Qué cuenta representa el Capital Social?", options: ["100", "129", "110", "170"], correctAnswer: 0, explanation: "La cuenta 100 es Capital Social.", points: 20, category: "Teoría" },
    { id: "j5", text: "Las existencias pertenecen al grupo:", options: ["1", "2", "3", "4"], correctAnswer: 2, explanation: "El Grupo 3 está dedicado a las existencias.", points: 20, category: "Teoría" }
  ],
  [Level.SENIOR]: [
    { id: "s1", text: "Al comprar mercaderías a crédito, la cuenta 400 (Proveedores)...", options: ["Aumenta por el Debe", "Disminuye por el Haber", "Aumenta por el Haber", "No varía su saldo"], correctAnswer: 2, explanation: "Siendo una cuenta de Pasivo, aumenta por el Haber al contraer la deuda.", points: 30, category: "Dinámica" },
    { id: "s2", text: "Una cuenta de Activo nace y aumenta por:", options: ["Haber", "Debe", "Ambos", "Ninguno"], correctAnswer: 1, explanation: "Las cuentas de activo tienen naturaleza deudora.", points: 30, category: "Dinámica" },
    { id: "s3", text: "Si cargamos la cuenta 572 (Bancos), el saldo:", options: ["Aumenta", "Disminuye", "Se mantiene", "Se anula"], correctAnswer: 0, explanation: "Un cargo en una cuenta de activo aumenta su valor.", points: 30, category: "Dinámica" },
    { id: "s4", text: "La cuenta 129 (Resultado del ejercicio) con saldo acreedor indica:", options: ["Pérdida", "Beneficio", "Quiebra", "Liquidación"], correctAnswer: 1, explanation: "Saldo acreedor en P&G significa beneficios.", points: 30, category: "Dinámica" },
    { id: "s5", text: "El pago a un proveedor mediante transferencia bancaria implica:", options: ["Cargar 400 y Abonar 572", "Abonar 400 y Cargar 572", "Cargar 600 y Abonar 572", "Abonar 400 y Cargar 600"], correctAnswer: 0, explanation: "Se reduce el pasivo (debe) y se reduce el activo (haber).", points: 30, category: "Dinámica" }
  ],
  [Level.EXECUTIVE]: [
    { id: "e1", text: "En la liquidación de IVA del Modelo 303, si el IVA Soportado > IVA Repercutido:", options: ["Resultado a ingresar", "Resultado a compensar/devolver", "Asiento de pérdida", "No se presenta modelo"], correctAnswer: 1, explanation: "Se genera un derecho de compensación frente a la Hacienda Pública.", points: 50, category: "Fiscal" },
    { id: "e2", text: "¿Qué cuenta se utiliza para registrar el IVA Repercutido?", options: ["472", "477", "4750", "4700"], correctAnswer: 1, explanation: "La 477 es H.P. IVA Repercutido.", points: 50, category: "Fiscal" },
    { id: "e3", text: "El Modelo 111 se utiliza para liquidar:", options: ["IVA", "Retenciones IRPF", "Sociedades", "Operaciones Intracomunitarias"], correctAnswer: 1, explanation: "Retenciones practicadas a trabajadores y profesionales.", points: 50, category: "Fiscal" },
    { id: "e4", text: "La cuenta 4750 representa:", options: ["Derecho de devolución", "Obligación de pago por IVA", "Gasto por impuestos", "Reserva legal"], correctAnswer: 1, explanation: "H.P. Acreedora por IVA tras la liquidación.", points: 50, category: "Fiscal" },
    { id: "e5", text: "Un asiento de amortización (681 a 281) representa:", options: ["Un ingreso", "Una pérdida de valor irreversible", "Una pérdida de valor sistemática", "Un aumento de activo"], correctAnswer: 2, explanation: "La amortización es la depreciación sistemática del inmovilizado.", points: 50, category: "Contabilidad" }
  ]
};

export const generateAccountingQuestions = async (level: Level): Promise<Question[]> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey || apiKey === "undefined") return FALLBACK_QUESTIONS[level];
  
  const prompts = {
    [Level.JUNIOR]: "Nivel Fácil: Clasificación básica de cuentas.",
    [Level.SENIOR]: "Nivel Medio: Dinámica de cargos y abonos.",
    [Level.EXECUTIVE]: "Nivel Difícil: Fiscalidad y cierre."
  };

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Genera 5 preguntas de contabilidad española (PGC). Nivel: ${prompts[level]}. JSON exacto.`,
      config: { 
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              text: { type: Type.STRING },
              options: { type: Type.ARRAY, items: { type: Type.STRING } },
              correctAnswer: { type: Type.INTEGER },
              explanation: { type: Type.STRING },
              points: { type: Type.INTEGER },
              category: { type: Type.STRING }
            },
            required: ["id", "text", "options", "correctAnswer", "explanation", "points", "category"]
          }
        }
      }
    });
    return JSON.parse(response.text || "[]");
  } catch (e) { return FALLBACK_QUESTIONS[level]; }
};

export const explainAccount = async (accountCode: string): Promise<any> => {
  if (LOCAL_PGC_DB[accountCode]) return LOCAL_PGC_DB[accountCode];
  const apiKey = process.env.API_KEY;
  if (!apiKey || apiKey === "undefined") return null;
  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Explica la cuenta ${accountCode} del PGC de España.`,
      config: { responseMimeType: "application/json" }
    });
    return JSON.parse(response.text || "null");
  } catch (e) { return null; }
};
