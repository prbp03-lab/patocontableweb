@echo off
echo Actualizando configuracion de TypeScript...
cd /d C:\Users\Toni\Desktop\PATOCONTABLEWEB
copy /Y PatoContableWeb\tsconfig.json tsconfig.json
git add tsconfig.json
git commit -m "Fix TypeScript configuration for Vercel build"
git push origin main
echo.
echo LISTO! Ahora ve a Vercel y haz clic en "Redeploy"
pause
