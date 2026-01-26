# 🦆 El Desafío PatoContable

**Motor de Simulación Financiera y Fiscal basado en el PGC de España.**

Este proyecto implementa una arquitectura "Tax-as-Code" para la enseñanza interactiva de la contabilidad profesional, diseñada para transformar la experiencia de aprendizaje del Plan General Contable (PGC).

## 🏗️ Arquitectura del Sistema
- **Frontend**: React 19 + TypeScript + Tailwind CSS.
- **IA Engine**: Google Gemini API (Modelos 3.0 Flash/Pro).
- **Lógica Fiscal**: `GestorFiscal` (TypeScript Class) sincronizada con el Calendario de la AEAT.
- **Propiedad Intelectual**: © 2026 PatoContable. 
  - **Titular Legal**: Patricia Rocio Bustos Paco.
  - **Registro SafeCreative**: 2601234346797.

## 📁 Estructura del Repositorio (`prbp03-lab/pato-contable`)
- `/services`: Lógica de negocio, IA y motor fiscal.
- `/components`: Interfaz de usuario modular y reactiva.
- `/constants.tsx`: Fuente única de verdad para el PGC y branding.
- `/types.ts`: Definiciones de interfaces contables.

## 🚀 Despliegue e Instalación
Para poner en marcha el laboratorio en un entorno local:

1. **Clonar el repositorio oficial**:
   ```bash
   git clone https://github.com/prbp03-lab/pato-contable.git
   cd el-desafio-pato-contable
   ```
2. **Configurar variables de entorno**:
   - Asegúrate de tener una `API_KEY` válida de Google Gemini inyectada vía `process.env.API_KEY`.
3. **Ejecución**:
   ```bash
   npm install && npm run dev
   ```

## 📉 Roadmap
- [x] **Branding Unificado**: Consolidación bajo el alias `pato-contable`.
- [x] **Exportación JSON**: Sistema de reportes académicos funcional.
- [ ] **Módulo de Auditoría**: Validación automática de asientos complejos.

---
**Desarrollado por PatoContable.**
*Copyright (c) 2026 Patricia Rocio Bustos Paco.*
