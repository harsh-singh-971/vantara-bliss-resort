@echo off
echo ===================================================
echo Pushing Vantara Bliss Resort to GitHub...
echo Repository: https://github.com/icoderandomly/vantara-bliss-resort.git
echo ===================================================
git push -u origin main
if %ERRORLEVEL% EQU 0 (
    echo.
    echo ===================================================
    echo SUCCESS! Pushed to GitHub!
    echo Repository: https://github.com/icoderandomly/vantara-bliss-resort
    echo GitHub Actions will now automatically build and host it!
    echo ===================================================
) else (
    echo.
    echo [NOTE] If repository does not exist yet, create it on:
    echo https://github.com/new?name=vantara-bliss-resort
    echo Then run this script again.
)
pause
