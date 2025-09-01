@echo off
echo Deploying to Azure Static Web Apps...
git add .
git commit -m "Configure Azure Static Web Apps CI/CD for Vite + Spline"
git push origin main
echo Deployment triggered! Check: https://ambitious-moss-00cdb440f.2.azurestaticapps.net/
pause
