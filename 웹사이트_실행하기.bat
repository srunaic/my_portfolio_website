@echo off
echo ===================================================
echo   최성효 포트폴리오 웹사이트 로컬 실행기
echo ===================================================
echo.
echo 웹사이트를 실행하기 위해 로컬 서버를 가동합니다...
echo 잠시만 기다려 주세요.
echo.

:: Vite 서버 실행 (새 창에서)
start cmd /k "npm run dev"

:: 서버 가동 대기 (3초)
timeout /t 3 /nobreak >nul

:: 브라우저 자동 실행
start http://localhost:5173

echo.
echo 실행 완료! 웹사이트가 브라우저에서 열렸습니다.
echo 이 창을 닫아도 서버는 계속 실행됩니다.
echo.
pause
