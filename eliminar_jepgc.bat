@echo off
echo Eliminando carpeta JEPGC que causa conflictos...
cd /d C:\Users\Toni\Desktop\PATOCONTABLEWEB
git rm -r JEPGC
git commit -m "Remove JEPGC folder to avoid conflicts"
git push origin main
echo.
echo LISTO! Ve a Vercel y haz "Redeploy"
pause
