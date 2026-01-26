# Guía Rápida: Cómo Probar la Aplicación PatoContable

## 📋 Paso 1: Instalar Node.js

Node.js no está instalado en tu sistema. Necesitas instalarlo primero:

### Opción A: Instalación Automática (Recomendada)

1. **Descarga Node.js:**
   - Ve a: https://nodejs.org/
   - Descarga la versión **LTS** (Long Term Support) - recomendada
   - El instalador se llama algo como: `node-v20.x.x-x64.msi`

2. **Ejecuta el instalador:**
   - Haz doble clic en el archivo descargado
   - Acepta los términos y condiciones
   - **IMPORTANTE**: Marca la casilla "Automatically install the necessary tools"
   - Haz clic en "Next" hasta completar la instalación
   - Reinicia tu terminal (PowerShell o CMD)

3. **Verifica la instalación:**
   ```powershell
   node --version
   npm --version
   ```
   Deberías ver algo como:
   ```
   v20.11.0
   10.2.4
   ```

---

## 🚀 Paso 2: Instalar Dependencias del Proyecto

Una vez que Node.js esté instalado:

1. **Abre PowerShell o Terminal**

2. **Navega a la carpeta del proyecto:**
   ```powershell
   cd C:\Users\Toni\Desktop\PATOCONTABLEWEB\PatoContableWeb
   ```

3. **Instala las dependencias:**
   ```powershell
   npm install
   ```
   
   Esto tomará unos minutos. Verás algo como:
   ```
   added 245 packages in 45s
   ```

---

## 💻 Paso 3: Ejecutar la Aplicación

1. **Inicia el servidor de desarrollo:**
   ```powershell
   npm run dev
   ```

2. **Verás un mensaje como:**
   ```
   VITE v5.0.0  ready in 500 ms

   ➜  Local:   http://localhost:5173/
   ➜  Network: use --host to expose
   ```

3. **Abre tu navegador:**
   - Abre Chrome, Firefox, Edge, o tu navegador favorito
   - Ve a: **http://localhost:5173**
   - ¡La aplicación debería cargarse! 🎉

---

## 🎮 Paso 4: Probar las Funcionalidades

### 1. Página de Inicio (Home)
- Verás el hero con el pato flotante animado
- Features del juego educativo
- Botones de "Jugar Ahora" y "Más Información"

### 2. Sobre Mí
- Perfil profesional de Patricia
- Timeline de experiencia
- Educación y skills
- Botones para descargar CV (ES/CA)

### 3. **Herramientas** ⭐ (Lo más importante)

**Tab: Base de Datos PGC**
- Prueba el buscador: escribe "430" o "clientes"
- Usa los filtros: selecciona "Grupo 4" o "Naturaleza: Deudora"
- Haz clic en cualquier fila para ver detalles
- Verás modelos fiscales, contrapartidas, etc.

**Tab: Calendario Fiscal**
- Verás todos los modelos fiscales organizados por categoría
- IVA (azul), IRPF (verde), Sociedades (amarillo), Informativa (morado)
- Timeline anual en la parte inferior
- Fechas exactas de cada declaración

### 4. Acerca del Juego
- Información sobre el proyecto educativo
- SafeCreative registration
- Objetivos pedagógicos

### 5. Cambio de Idioma
- Haz clic en "ES" o "CA" en la esquina superior derecha
- Todo el contenido cambiará instantáneamente

---

## 🛑 Detener la Aplicación

Cuando termines de probar:
- En la terminal donde ejecutaste `npm run dev`
- Presiona `Ctrl + C`
- Confirma con `S` (Sí) si te pregunta

---

## ❓ Solución de Problemas

### Error: "npm: The term 'npm' is not recognized"
- Node.js no está instalado correctamente
- Reinicia tu terminal después de instalar Node.js
- Verifica que Node.js esté en el PATH

### Error: "Cannot find module"
- Ejecuta: `npm install` de nuevo
- Asegúrate de estar en la carpeta correcta

### La página no carga
- Verifica que el servidor esté corriendo (debe decir "ready in...")
- Prueba con: http://127.0.0.1:5173
- Revisa que el puerto 5173 no esté ocupado

### Errores en la consola del navegador
- Presiona F12 para abrir las herramientas de desarrollador
- Ve a la pestaña "Console"
- Copia el error y podemos resolverlo

---

## 📸 ¿Qué Deberías Ver?

Cuando la aplicación cargue correctamente:

1. **Header sticky** con logo "PATOCONTABLE" y navegación
2. **Selector de idioma** ES/CA en la esquina
3. **Hero animado** con el pato flotante
4. **Diseño oscuro** con efectos glassmorphism
5. **Colores vibrantes**: azul primary (#0d93f2), amarillo accent
6. **Animaciones suaves** al hacer hover
7. **Footer** con información de contacto y SafeCreative

---

## 🎯 Próximos Pasos Después de Probar

Una vez que veas que todo funciona:

1. **Feedback**: Dime qué te parece el diseño y funcionalidad
2. **Ajustes**: Podemos hacer cambios de colores, textos, etc.
3. **Juego JEPGC**: Integrar el juego educativo completo
4. **Más cuentas PGC**: Añadir más cuentas si lo necesitas
5. **Despliegue**: Subir a un servidor para que esté online

---

## 💡 Comandos Útiles

```powershell
# Ver la aplicación en desarrollo
npm run dev

# Crear build de producción
npm run build

# Ver el build de producción localmente
npm run preview

# Limpiar node_modules y reinstalar
Remove-Item -Recurse -Force node_modules
npm install
```

---

## 📞 ¿Necesitas Ayuda?

Si tienes algún problema:
1. Copia el mensaje de error completo
2. Dime en qué paso estás
3. Te ayudaré a resolverlo

¡Disfruta probando la aplicación! 🦆✨
