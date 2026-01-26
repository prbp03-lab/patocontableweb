# PatoContable Web - Guía de Instalación y Despliegue

## 📋 Requisitos Previos

- **Node.js** versión 18 o superior
- **npm** versión 9 o superior

Para verificar si tienes Node.js instalado:
```bash
node --version
npm --version
```

Si no tienes Node.js instalado, descárgalo desde: https://nodejs.org/

## 🚀 Instalación

### 1. Navegar al directorio del proyecto

```bash
cd c:\Users\Toni\Desktop\PATOCONTABLEWEB\PatoContableWeb
```

### 2. Instalar dependencias

```bash
npm install
```

Este comando instalará todas las dependencias necesarias:
- React 18
- React Router DOM
- i18next (internacionalización)
- Vite (build tool)
- TypeScript

## 💻 Desarrollo Local

### Ejecutar el servidor de desarrollo

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo en `http://localhost:5173`

La aplicación se recargará automáticamente cuando hagas cambios en el código.

## 🏗️ Build de Producción

### Crear build optimizado

```bash
npm run build
```

Este comando:
1. Compila TypeScript a JavaScript
2. Optimiza y minifica el código
3. Genera los archivos estáticos en la carpeta `dist/`

### Preview del build de producción

```bash
npm run preview
```

Esto te permite ver cómo se verá la aplicación en producción localmente.

## 📁 Estructura del Proyecto

```
PatoContableWeb/
├── public/              # Assets estáticos
│   └── img/            # Imágenes, CVs, certificados
├── src/
│   ├── components/     # Componentes React
│   │   └── layout/    # Header, Footer, etc.
│   ├── pages/         # Páginas principales
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Tools.tsx
│   │   └── GameInfo.tsx
│   ├── data/          # Datos PGC y calendario
│   │   ├── pgc-data.ts
│   │   └── fiscal-calendar.ts
│   ├── i18n/          # Traducciones ES/CA
│   │   ├── es.ts
│   │   ├── ca.ts
│   │   └── index.ts
│   ├── styles/        # Estilos globales
│   ├── types.ts       # Tipos TypeScript
│   ├── App.tsx        # Componente principal
│   └── main.tsx       # Entry point
├── index.html         # HTML principal
├── package.json       # Dependencias
├── tsconfig.json      # Config TypeScript
└── vite.config.ts     # Config Vite
```

## 🌐 Despliegue

### Opción 1: Vercel (Recomendado)

1. Instala Vercel CLI:
```bash
npm install -g vercel
```

2. Despliega:
```bash
vercel
```

3. Sigue las instrucciones en pantalla

### Opción 2: Netlify

1. Instala Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build y despliega:
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Opción 3: GitHub Pages

1. Instala gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Añade a `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. Despliega:
```bash
npm run deploy
```

### Opción 4: Servidor Propio

1. Crea el build:
```bash
npm run build
```

2. Copia la carpeta `dist/` a tu servidor web (Apache, Nginx, etc.)

3. Configura el servidor para servir `index.html` en todas las rutas (SPA routing)

**Ejemplo para Nginx:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## 🔧 Configuración

### Cambiar el puerto de desarrollo

Edita `vite.config.ts`:
```typescript
export default defineConfig({
  server: {
    port: 3000
  }
})
```

### Configurar base URL para producción

Si despliegas en un subdirectorio, edita `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/mi-subdirectorio/'
})
```

## 🐛 Solución de Problemas

### Error: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error de TypeScript
```bash
npm run build
```
Revisa los errores en la consola y corrígelos.

### La aplicación no carga en producción
Verifica que tu servidor esté configurado para SPA routing (todas las rutas deben servir `index.html`).

## 📝 Notas Importantes

1. **Idiomas**: La aplicación detecta automáticamente el idioma del navegador (ES/CA)
2. **Assets**: Todos los PDFs y imágenes están en `public/img/`
3. **Performance**: El build de producción está optimizado con code splitting
4. **SEO**: Todas las páginas tienen meta tags apropiados

## 🆘 Soporte

Si encuentras problemas:
1. Verifica que Node.js esté instalado correctamente
2. Asegúrate de estar en el directorio correcto
3. Revisa que todas las dependencias estén instaladas
4. Consulta la documentación de Vite: https://vitejs.dev/

## 📧 Contacto

Patricia Bustos - patriadmconta@outlook.com
