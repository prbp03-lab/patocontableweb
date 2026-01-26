$jsonPath = "pcweb/src/jepgc/data/quiz_engine.json"
$content = Get-Content $jsonPath -Raw
if ($content -notmatch '}\s*$') {
    Write-Output "Fixing JSON closing brace..."
    $content = $content.Trim() + "`n}`n"
    Set-Content $jsonPath $content -Encoding utf8
}
git add $jsonPath
git commit -m "Fix JSON syntax in quiz_engine.json (Automated Fix)"
git push origin main --force
