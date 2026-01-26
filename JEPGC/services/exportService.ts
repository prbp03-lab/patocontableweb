
/**
 * PatoContable DevOps Export Tool v2.
 * Consolidación total de activos: Metadatos, PGC y Cuestionarios.
 */

import { METADATA_LEGAL, BRAND_CONFIG, PGC_GROUPS_DETAILED } from '../constants';
import { UserState, GameSession, Level } from '../types';
import { FALLBACK_QUESTIONS, LOCAL_PGC_DB } from './geminiService';

export const export_to_json = (user: UserState, lastSession?: GameSession) => {
  
  // 1. Integración Total del PGC (pgc_complete)
  const pgc_complete = PGC_GROUPS_DETAILED.map(group => ({
    grupo_id: group.id,
    nombre: group.name,
    descripcion: group.description,
    subgrupos: group.subgroups.map(sub => {
      const extraData = LOCAL_PGC_DB[sub.code] || {};
      return {
        codigo: sub.code,
        nombre: sub.name,
        ...extraData
      };
    })
  }));

  // 2. Estructura de Cuestionario (5 preguntas por nivel obligatorias)
  const cuestionario = {
    facil: FALLBACK_QUESTIONS[Level.JUNIOR],
    medio: FALLBACK_QUESTIONS[Level.SENIOR],
    dificil: FALLBACK_QUESTIONS[Level.EXECUTIVE]
  };

  // 3. Payload Consolidado (GitHub Structure)
  const payload = {
    metadatos: {
      autor: BRAND_CONFIG.author_display,
      titular_legal: BRAND_CONFIG.legal_owner,
      registro: BRAND_CONFIG.safe_creative_id,
      version: BRAND_CONFIG.version,
      timestamp: new Date().toISOString()
    },
    usuario_progreso: {
      nombre: user.name,
      xp: user.xp,
      nivel_actual: user.level,
      ultimo_desafio: lastSession || "Ninguno"
    },
    pgc: pgc_complete,
    cuestionario: cuestionario
  };

  // 4. Validación de Payload (Debug Logs)
  const jsonStr = JSON.stringify(payload, null, 2);
  const byteSize = new Blob([jsonStr]).size;
  const totalQuestions = cuestionario.facil.length + cuestionario.medio.length + cuestionario.dificil.length;
  
  console.info(`[DEVOPS] Iniciando exportación para el repositorio oficial: prbp03-lab/el-desafio-patocontable...`);
  console.info(`[DEVOPS] Tamaño del Payload: ${byteSize} bytes`);
  console.info(`[DEVOPS] Registros PGC: ${pgc_complete.length} grupos`);
  console.info(`[DEVOPS] Total Preguntas: ${totalQuestions}`);
  console.info(`[DEVOPS] Path de destino: https://github.com/prbp03-lab/el-desafio-patocontable`);

  // 5. Ejecución de la descarga
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  // Nombre del archivo normalizado para el repositorio 'el-desafio-patocontable'
  link.download = `el-desafio-patocontable_report_v${BRAND_CONFIG.version.replace(/\./g, '_')}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
