@echo off
echo ========================================
echo Preparando proyecto para Vercel
echo ========================================
echo.

cd /d C:\Users\Toni\Desktop\PATOCONTABLEWEB

echo [1/5] Moviendo archivos del proyecto a la raiz...
xcopy /E /I /Y PatoContableWeb\src src
xcopy /E /I /Y PatoContableWeb\public public
copy /Y PatoContableWeb\*.json .
copy /Y PatoContableWeb\*.ts .
copy /Y PatoContableWeb\*.html .
copy /Y PatoContableWeb\*.md .

echo [2/5] Actualizando .gitignore...
echo node_modules/ > .gitignore
echo dist/ >> .gitignore
echo .env >> .gitignore
echo *.log >> .gitignore

echo [3/5] Agregando cambios a Git...
git add .
git commit -m "Restructure project for Vercel deployment"

echo [4/5] Subiendo a GitHub...
git push origin main --force

echo.
echo ========================================
echo LISTO! Ahora puedes:
echo 1. Ir a vercel.com
echo 2. Crear un NUEVO proyecto
echo 3. Importar desde GitHub: patocontableweb
echo 4. Vercel detectara automaticamente que es Vite
echo 5. Dale a Deploy!
echo ========================================
pause
