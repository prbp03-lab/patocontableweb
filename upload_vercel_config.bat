@echo off
cd /d C:\Users\Toni\Desktop\PATOCONTABLEWEB
git add vercel.json
git commit -m "Add Vercel configuration for correct build directory"
git push origin main
echo DONE
pause
