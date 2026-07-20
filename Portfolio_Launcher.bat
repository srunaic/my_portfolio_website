@echo off
title Choi Seong-hyo Portfolio Launcher
echo ===================================================
echo   최성효 포트폴리오 웹사이트를 여는 중...
echo   Choi Seong-hyo Portfolio is launching...
echo ===================================================
echo.
echo 잠시 후 브라우저가 자동으로 실행됩니다.
echo.

:: Open the live GitHub Pages URL
start https://srunaic.github.io/my_portfolio_website/

timeout /t 2 /nobreak >nul
exit
