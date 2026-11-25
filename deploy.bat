@echo off
setlocal enabledelayedexpansion

REM === Configuration ===
set "GITHUB_USER=francescarigoni90"
set "REPO_NAME=francesca-rigoni-cv"
set "BRANCH=main"
set "REPO_URL=https://github.com/%GITHUB_USER%/%REPO_NAME%.git"

if "%GITHUB_USER%"=="GITHUB_USERNAME" (
    echo [ERROR] Please edit deploy.bat and replace GITHUB_USERNAME with Francesca's actual GitHub username.
    pause
    exit /b 1
)

echo ==========================================
echo  Deploying %REPO_NAME% to GitHub Pages
echo ==========================================

REM Initialize git if not already initialized
if not exist ".git" (
    echo Initializing Git repository...
    git init
    git branch -M %BRANCH%
)

REM Ensure origin remote is configured
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo Adding remote origin: %REPO_URL%
    git remote add origin "%REPO_URL%"
)

REM Optional commit message passed as argument, otherwise use default
set "COMMIT_MSG=%~1"
if "%COMMIT_MSG%"=="" (
    set "COMMIT_MSG=Deploy CV (%date% %time%)"
)

echo.
echo [1/4] Checking git status...
git status -s

echo.
echo [2/4] Staging and committing changes...
git add .
git diff --cached --quiet
if errorlevel 1 (
    git commit -m "%COMMIT_MSG%"
) else (
    echo No new source changes to commit. Proceeding to push/deploy...
)

echo.
echo [3/4] Pushing source code to %BRANCH%...
git push -u origin %BRANCH%
if errorlevel 1 (
    echo [ERROR] Failed to push to %BRANCH%. Check GitHub credentials or repo permissions.
    pause
    exit /b 1
)

echo.
echo [4/4] Building and deploying to gh-pages...
call npm run deploy
if errorlevel 1 (
    echo [ERROR] npm run deploy failed.
    pause
    exit /b 1
)

echo.
echo ==========================================
echo  Deployment complete!
echo  Live URL: https://%GITHUB_USER%.github.io/%REPO_NAME%/
echo  (GitHub Pages may take 1-2 minutes to refresh)
echo ==========================================
pause