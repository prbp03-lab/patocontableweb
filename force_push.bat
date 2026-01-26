@echo off
git add .
git commit -m "Fix JSON syntax and force update"
git push origin main --force
echo DONE > done.txt
