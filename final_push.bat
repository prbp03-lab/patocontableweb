@echo off
git add .
git commit -m "Fix syntax error in quiz_engine.json"
git push origin main --force
echo SUCCESS > push_done.txt
