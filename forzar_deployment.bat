@echo off
echo Forzando nuevo deployment en Vercel...
cd /d C:\Users\Toni\Desktop\PATOCONTABLEWEB
git commit --allow-empty -m "Force new Vercel deployment"
git push origin main
echo.
echo LISTO! Vercel detectara automaticamente el nuevo commit
echo y comenzara un nuevo deployment.
echo Espera 30 segundos y revisa Vercel.
pause
