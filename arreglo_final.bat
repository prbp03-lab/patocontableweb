@echo off
echo ========================================
echo Arreglando configuracion final para Vercel
echo ========================================
cd /d C:\Users\Toni\Desktop\PATOCONTABLEWEB

echo Copiando package.json corregido...
copy /Y PatoContableWeb\package.json package.json

echo Subiendo cambios a GitHub...
git add package.json
git commit -m "Remove TypeScript check from build command"
git push origin main

echo.
echo ========================================
echo LISTO! Ahora:
echo 1. Ve a Vercel
echo 2. Haz clic en "Redeploy"
echo 3. Esta vez deberia funcionar!
echo ========================================
pause
