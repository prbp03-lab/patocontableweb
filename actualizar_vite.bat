@echo off
echo Actualizando vite.config.ts...
cd /d C:\Users\Toni\Desktop\PATOCONTABLEWEB
copy /Y PatoContableWeb\vite.config.ts vite.config.ts
git add vite.config.ts
git commit -m "Fix vite config for ES modules"
git push origin main
echo.
echo LISTO! Ve a Vercel y haz "Redeploy"
pause
