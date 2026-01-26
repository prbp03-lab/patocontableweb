@echo off
echo ========================================
echo Limpieza final del repositorio
echo ========================================
cd /d C:\Users\Toni\Desktop\PATOCONTABLEWEB

echo [1/4] Eliminando carpetas problematicas...
git rm -rf JEPGC
git rm -rf .github
git rm -rf PatoContableWeb
git rm -rf estructura-datos-pgc-desarrollo-software-educativo
git rm -rf img
git rm -f PBWEB_Patricia_Bustos.html
git rm -f vercel.json

echo [2/4] Creando commit...
git add .
git commit -m "Clean repository - keep only essential files"

echo [3/4] Subiendo a GitHub...
git push origin main --force

echo.
echo ========================================
echo LISTO! Ahora en Vercel:
echo 1. Espera 30 segundos
echo 2. Vercel detectara el cambio automaticamente
echo 3. Deberia compilar correctamente
echo ========================================
pause
