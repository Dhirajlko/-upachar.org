@echo off
title Upachar.org Local Web Server
echo ===================================================
echo     Starting Upachar.org Home Healthcare Website
echo ===================================================
echo.
echo Opening index.html in your default web browser...
start index.html

echo.
echo Launching local development web server on http://localhost:8080 ...
python -m http.server 8080
pause
