
/**
 * Propiedad Intelectual de Patricia Rocio Bustos Paco.
 * Arquitectura de Lógica Contable PatoContable.
 * Registro Safe Creative: 2601234346797.
 */

import { CALENDARIO_FISCAL_PYME } from '../constants';

export class GestorFiscal {
  /**
   * Verifica qué obligaciones fiscales están activas en una fecha determinada.
   * @param mes Mes del juego (1-12)
   * @param dia Día del juego (1-31)
   * @returns Lista de modelos que deben presentarse
   */
  static verificar_obligacion(mes: number, dia: number): any[] {
    const obligacionesActivas: any[] = [];
    
    Object.values(CALENDARIO_FISCAL_PYME).forEach((modelo: any) => {
      const mesValido = modelo.meses_presentacion.includes(mes);
      let diaValido = dia >= modelo.rango_dias[0] && dia <= modelo.rango_dias[1];
      
      // Lógica especial para el IVA de Enero (Cierre Q4)
      if (modelo.id === "303" && mes === 1) {
        diaValido = dia >= modelo.rango_especial_q4[0] && dia <= modelo.rango_especial_q4[1];
      }

      if (mesValido && diaValido) {
        obligacionesActivas.push(modelo);
      }
    });

    return obligacionesActivas;
  }

  /**
   * Valida si las cuentas utilizadas en un asiento corresponden al modelo fiscal indicado.
   * @param modeloId ID del modelo (ej. "303")
   * @param cuentasUsadas Array de códigos de cuenta (ej. ["477", "472"])
   * @returns Resultado de la validación
   */
  static validar_asiento(modeloId: string, cuentasUsadas: string[]): { valido: boolean, error?: string } {
    const config: any = (CALENDARIO_FISCAL_PYME as any)[modeloId];
    if (!config) return { valido: false, error: "Modelo fiscal no reconocido en la base de datos maestra." };

    // Verificamos si las cuentas clave están presentes
    const cuentasInvalidas = cuentasUsadas.filter(c => !config.cuentas_afectadas.some((allowed: string) => c.startsWith(allowed)));
    
    if (cuentasInvalidas.length > 0) {
      return { 
        valido: false, 
        error: `Incoherencia Contable: Las cuentas [${cuentasInvalidas.join(", ")}] no corresponden a la operativa del Modelo ${modeloId} según el PGC.`
      };
    }

    return { valido: true };
  }

  /**
   * Calcula la penalización por presentación fuera de plazo o error técnico.
   * @param modeloId ID del modelo
   * @param esErrorTecnico Si el error es por cuentas mal usadas o por plazo
   */
  static calcular_sancion(modeloId: string, esErrorTecnico: boolean = true): number {
    const config = (CALENDARIO_FISCAL_PYME as any)[modeloId];
    if (!config) return 0;
    
    return esErrorTecnico ? config.penalizacion_error : config.penalizacion_error * 0.5;
  }
}
