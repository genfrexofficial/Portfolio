@echo off
title Dharshan Selvaraj - 3D Portfolio
cd /d "%~dp0Portfolio-Website-main"
set PATH=C:\Windows\System32;C:\Windows;C:\Windows\System32\WindowsPowerShell\v1.0;%PATH%
echo ========================================================
echo   Starting Dharshan Selvaraj 3D Interactive Portfolio...
echo   Opening in your browser: http://localhost:5173/
echo ========================================================
start http://localhost:5173/
npm run dev
pause
