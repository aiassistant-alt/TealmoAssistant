#!/usr/bin/env pwsh

Write-Host "🚀 Deploying to Azure Static Web Apps..." -ForegroundColor Cyan
Write-Host ""

# Add all files
Write-Host "📁 Adding files to git..." -ForegroundColor Yellow
git add .

# Commit changes
Write-Host "💾 Committing changes..." -ForegroundColor Yellow
git commit -m "🚀 Configure Azure Static Web Apps CI/CD for Vite + Spline deployment"

# Push to main branch
Write-Host "⬆️  Pushing to main branch..." -ForegroundColor Yellow
git push origin main

Write-Host ""
Write-Host "✅ Deployment triggered successfully!" -ForegroundColor Green
Write-Host "🌐 Your app will be available at:" -ForegroundColor Cyan
Write-Host "   https://ambitious-moss-00cdb440f.2.azurestaticapps.net/" -ForegroundColor Blue
Write-Host ""
Write-Host "⏱️  Deployment usually takes 2-3 minutes..." -ForegroundColor Gray
Write-Host "📊 Monitor progress at: https://github.com/aiassistant-alt/TealmoAssistant/actions" -ForegroundColor Gray

Read-Host "Press Enter to continue"
