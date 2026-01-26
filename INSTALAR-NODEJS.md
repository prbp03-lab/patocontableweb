# 🚀 Guía Paso a Paso: Instalar Node.js Correctamente

## ⚠️ Problema Detectado
Node.js no está instalado o no se instaló correctamente en tu sistema.

---

## 📥 PASO 1: Descargar Node.js

1. **Abre tu navegador** (Chrome, Edge, Firefox)

2. **Ve a esta dirección exacta:**
   ```
   https://nodejs.org/es/download
   ```

3. **Descarga el instalador correcto:**
   - Busca el botón grande que dice **"LTS"** (Long Term Support)
   - Debe decir algo como: **"20.11.0 LTS - Recomendado para la mayoría"**
   - Haz clic en el botón de descarga
   - El archivo se llamará algo como: `node-v20.11.0-x64.msi`

4. **Espera a que termine la descarga**
   - Normalmente se descarga en: `C:\Users\Toni\Downloads\`
   - El archivo pesa unos 30-40 MB

---

## 💻 PASO 2: Instalar Node.js

1. **Localiza el archivo descargado:**
   - Abre la carpeta "Descargas" o "Downloads"
   - Busca el archivo que empieza con `node-v...` y termina en `.msi`

2. **Ejecuta el instalador:**
   - Haz **doble clic** en el archivo `.msi`
   - Si aparece una ventana de seguridad, haz clic en **"Sí"** o **"Ejecutar"**

3. **Sigue el asistente de instalación:**

   **Pantalla 1: Bienvenida**
   - Haz clic en **"Next"** (Siguiente)

   **Pantalla 2: Términos de licencia**
   - Marca la casilla **"I accept the terms..."**
   - Haz clic en **"Next"**

   **Pantalla 3: Ubicación de instalación**
   - Deja la ruta por defecto: `C:\Program Files\nodejs\`
   - Haz clic en **"Next"**

   **Pantalla 4: Características personalizadas**
   - **MUY IMPORTANTE**: Deja todas las opciones marcadas
   - Asegúrate de que esté marcado: **"Add to PATH"**
   - Haz clic en **"Next"**

   **Pantalla 5: Herramientas nativas** (IMPORTANTE)
   - **MARCA** la casilla: **"Automatically install the necessary tools..."**
   - Esto instalará Python y otras herramientas necesarias
   - Haz clic en **"Next"**

   **Pantalla 6: Listo para instalar**
   - Haz clic en **"Install"**
   - Espera 2-3 minutos mientras se instala

4. **Finalizar instalación:**
   - Cuando termine, haz clic en **"Finish"**
   - Si se abre una ventana de PowerShell automáticamente, déjala terminar

---

## ✅ PASO 3: Verificar la Instalación

1. **IMPORTANTE: Cierra TODAS las ventanas de PowerShell o CMD que tengas abiertas**
   - Esto es crucial para que se actualice el PATH

2. **Abre una NUEVA ventana de PowerShell:**
   - Presiona `Windows + X`
   - Selecciona **"Windows PowerShell"** o **"Terminal"**

3. **Escribe este comando y presiona Enter:**
   ```powershell
   node --version
   ```

4. **Deberías ver algo como:**
   ```
   v20.11.0
   ```

5. **Ahora verifica npm:**
   ```powershell
   npm --version
   ```

6. **Deberías ver algo como:**
   ```
   10.2.4
   ```

---

## 🎯 PASO 4: Instalar las Dependencias del Proyecto

Una vez que Node.js esté instalado correctamente:

1. **En la misma ventana de PowerShell, navega al proyecto:**
   ```powershell
   cd C:\Users\Toni\Desktop\pcweb
   ```

2. **Instala las dependencias:**
   ```powershell
   npm install
   ```

3. **Espera 2-5 minutos** mientras se descargan e instalan todos los paquetes
   - Verás muchas líneas de texto pasando
   - Al final debería decir algo como: `added 245 packages in 45s`

---

## 🚀 PASO 5: Ejecutar la Aplicación

1. **Inicia el servidor de desarrollo:**
   ```powershell
   npm run dev
   ```

2. **Deberías ver:**
   ```
   VITE v5.0.0  ready in 500 ms

   ➜  Local:   http://localhost:5173/
   ➜  Network: use --host to expose
   ```

3. **Abre tu navegador y ve a:**
   ```
   http://localhost:5173
   ```

4. **¡Deberías ver la aplicación PatoContable funcionando!** 🎉

---

## ❌ Solución de Problemas

### Problema: "node: The term 'node' is not recognized"

**Solución:**
1. Asegúrate de haber **cerrado y vuelto a abrir** PowerShell después de instalar
2. Verifica que Node.js se instaló en: `C:\Program Files\nodejs\`
3. Si sigue sin funcionar, reinicia tu computadora

### Problema: El instalador no se descarga

**Solución:**
1. Prueba con este link directo: https://nodejs.org/dist/v20.11.0/node-v20.11.0-x64.msi
2. O busca en Google: "descargar nodejs windows"

### Problema: "npm install" da error

**Solución:**
1. Asegúrate de estar en la carpeta correcta:
   ```powershell
   cd C:\Users\Toni\Desktop\pcweb
   ```
2. Verifica que existe el archivo `package.json`:
   ```powershell
   Test-Path package.json
   ```
   Debe decir `True`

### Problema: La aplicación no carga en el navegador

**Solución:**
1. Verifica que el servidor esté corriendo (debe decir "ready in...")
2. Prueba con: http://127.0.0.1:5173
3. Revisa que no haya errores en la terminal

---

## 📞 ¿Necesitas Ayuda?

Si después de seguir todos estos pasos sigues teniendo problemas:

1. **Dime exactamente en qué paso estás**
2. **Copia el mensaje de error completo** (si hay alguno)
3. **Dime qué ves cuando ejecutas:** `node --version`

---

## 🎬 Resumen Visual

```
1. Descargar Node.js LTS desde nodejs.org
   ↓
2. Ejecutar el instalador .msi
   ↓
3. Marcar "Add to PATH" y "Install tools"
   ↓
4. Cerrar y abrir nueva PowerShell
   ↓
5. Verificar: node --version
   ↓
6. cd C:\Users\Toni\Desktop\pcweb
   ↓
7. npm install
   ↓
8. npm run dev
   ↓
9. Abrir http://localhost:5173
   ↓
10. ¡LISTO! 🎉
```

---

## 💡 Consejo Final

Si tienes problemas con la instalación, también puedes:
- Reiniciar tu computadora después de instalar Node.js
- Ejecutar PowerShell como Administrador (clic derecho → "Ejecutar como administrador")

¡Ánimo! Una vez que Node.js esté instalado, todo lo demás será muy fácil. 🚀
