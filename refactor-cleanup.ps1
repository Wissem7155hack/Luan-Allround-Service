# ===================================================================
# PROJECT REFACTORING CLEANUP SCRIPT
# Luan Allround Service - Landscaping Website
# ===================================================================
# This script automates the cleanup and reorganization of the project
# ===================================================================

Write-Host "🚀 Starting Project Refactoring Cleanup..." -ForegroundColor Cyan
Write-Host ""

# Step 1: Remove duplicate vite.config.js (keep only .ts)
Write-Host "📝 Step 1: Removing duplicate vite.config.js..." -ForegroundColor Yellow
if (Test-Path "vite.config.js") {
    Remove-Item "vite.config.js" -Force
    Write-Host "✅ Deleted vite.config.js (keeping vite.config.ts)" -ForegroundColor Green
} else {
    Write-Host "ℹ️  vite.config.js not found (already cleaned up)" -ForegroundColor Gray
}
Write-Host ""

# Step 2: Check duplicate /images/ folders
Write-Host "📁 Step 2: Checking for duplicate /images/ folders..." -ForegroundColor Yellow
$rootImagesExists = Test-Path "images"
$publicImagesExists = Test-Path "public\images"

if ($rootImagesExists -and $publicImagesExists) {
    Write-Host "⚠️  Found duplicate /images/ folders:" -ForegroundColor Red
    Write-Host "   - Root: /images/" -ForegroundColor Yellow
    Write-Host "   - Public: /public/images/" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "❓ The root /images/ folder should be deleted (keeping /public/images/)" -ForegroundColor Cyan
    Write-Host "   This will be handled after moving images to /src/assets/" -ForegroundColor Gray
} elseif ($rootImagesExists) {
    Write-Host "ℹ️  Only root /images/ found" -ForegroundColor Gray
} elseif ($publicImagesExists) {
    Write-Host "ℹ️  Only /public/images/ found" -ForegroundColor Gray
} else {
    Write-Host "ℹ️  No /images/ folders found" -ForegroundColor Gray
}
Write-Host ""

# Step 3: Create comprehensive /src structure
Write-Host "🏗️  Step 3: Creating /src directory structure..." -ForegroundColor Yellow

$directories = @(
    "src",
    "src\components",
    "src\components\layout",
    "src\components\sections",
    "src\components\forms",
    "src\components\ui",
    "src\components\schema",
    "src\components\effects",
    "src\data",
    "src\services",
    "src\types",
    "src\assets",
    "src\assets\images",
    "src\utils"
)

foreach ($dir in $directories) {
    if (!(Test-Path $dir)) {
        New-Item -Path $dir -ItemType Directory -Force | Out-Null
        Write-Host "  ✅ Created: $dir" -ForegroundColor Green
    } else {
        Write-Host "  ℹ️  Exists: $dir" -ForegroundColor Gray
    }
}
Write-Host ""

# Step 4: Move existing components to new structure
Write-Host "📦 Step 4: Moving existing components..." -ForegroundColor Yellow

# Layout components
$layoutComponents = @("Navbar.tsx", "Footer.tsx", "LocationPage.tsx")
foreach ($file in $layoutComponents) {
    $source = "components\$file"
    $dest = "src\components\layout\$file"
    if (Test-Path $source) {
        if (!(Test-Path $dest)) {
            Copy-Item $source $dest -Force
            Write-Host "  ✅ Copied: $file → src/components/layout/" -ForegroundColor Green
        } else {
            Write-Host "  ℹ️  Already exists: $dest" -ForegroundColor Gray
        }
    }
}

# Schema components
$schemaComponents = @(
    "SEOHead.tsx",
    "BreadcrumbSchema.tsx",
    "FAQSchema.tsx",
    "GardenerSchema.tsx",
    "PersonSchema.tsx"
)
foreach ($file in $schemaComponents) {
    $source = "components\$file"
    $dest = "src\components\schema\$file"
    if (Test-Path $source) {
        if (!(Test-Path $dest)) {
            Copy-Item $source $dest -Force
            Write-Host "  ✅ Copied: $file → src/components/schema/" -ForegroundColor Green
        } else {
            Write-Host "  ℹ️  Already exists: $dest" -ForegroundColor Gray
        }
    }
}

# Effects components
$effectComponents = @("SnowEffect.tsx")
foreach ($file in $effectComponents) {
    $source = "components\$file"
    $dest = "src\components\effects\$file"
    if (Test-Path $source) {
        if (!(Test-Path $dest)) {
            Copy-Item $source $dest -Force
            Write-Host "  ✅ Copied: $file → src/components/effects/" -ForegroundColor Green
        } else {
            Write-Host "  ℹ️  Already exists: $dest" -ForegroundColor Gray
        }
    }
}

Write-Host ""

# Step 5: Move data files
Write-Host "📊 Step 5: Moving data files..." -ForegroundColor Yellow
if (Test-Path "data\locations.ts") {
    if (!(Test-Path "src\data\locations.ts")) {
        Copy-Item "data\locations.ts" "src\data\locations.ts" -Force
        Write-Host "  ✅ Copied: locations.ts → src/data/" -ForegroundColor Green
    } else {
        Write-Host "  ℹ️  Already exists: src/data/locations.ts" -ForegroundColor Gray
    }
}
Write-Host ""

# Step 6: Move services
Write-Host "⚙️  Step 6: Moving services..." -ForegroundColor Yellow
$services = @("analytics.ts", "geminiService.ts")
foreach ($file in $services) {
    $source = "services\$file"
    $dest = "src\services\$file"
    if (Test-Path $source) {
        if (!(Test-Path $dest)) {
            Copy-Item $source $dest -Force
            Write-Host "  ✅ Copied: $file → src/services/" -ForegroundColor Green
        } else {
            Write-Host "  ℹ️  Already exists: $dest" -ForegroundColor Gray
        }
    }
}
Write-Host ""

# Step 7: Move types
Write-Host "🏷️  Step 7: Moving types..." -ForegroundColor Yellow
if (Test-Path "types.ts") {
    if (!(Test-Path "src\types\index.ts")) {
        Copy-Item "types.ts" "src\types\index.ts" -Force
        Write-Host "  ✅ Copied: types.ts → src/types/index.ts" -ForegroundColor Green
    } else {
        Write-Host "  ℹ️  Already exists: src/types/index.ts" -ForegroundColor Gray
    }
}
if (Test-Path "vite-env.d.ts") {
    if (!(Test-Path "src\vite-env.d.ts")) {
        Copy-Item "vite-env.d.ts" "src\vite-env.d.ts" -Force
        Write-Host "  ✅ Copied: vite-env.d.ts → src/" -ForegroundColor Green
    } else {
        Write-Host "  ℹ️  Already exists: src/vite-env.d.ts" -ForegroundColor Gray
    }
}
Write-Host ""

# Step 8: Summary
Write-Host "📋 CLEANUP SUMMARY" -ForegroundColor Cyan
Write-Host "==================" -ForegroundColor Cyan
Write-Host "✅ Directory structure created" -ForegroundColor Green
Write-Host "✅ Components copied to new locations" -ForegroundColor Green
Write-Host "✅ Data files moved" -ForegroundColor Green
Write-Host "✅ Services moved" -ForegroundColor Green
Write-Host "✅ Types moved" -ForegroundColor Green
Write-Host ""
Write-Host "⚠️  NEXT MANUAL STEPS:" -ForegroundColor Yellow
Write-Host "  1. Extract components from App.tsx (2,091 lines)" -ForegroundColor Yellow
Write-Host "  2. Update all import paths" -ForegroundColor Yellow
Write-Host "  3. Update vite.config.ts" -ForegroundColor Yellow
Write-Host "  4. Update tsconfig.json" -ForegroundColor Yellow
Write-Host "  5. Move App.tsx and index.tsx to /src/" -ForegroundColor Yellow
Write-Host "  6. Delete old /components/, /data/, /services/ folders" -ForegroundColor Yellow
Write-Host "  7. Delete root /images/ folder (after testing)" -ForegroundColor Yellow
Write-Host ""
Write-Host "🎉 Cleanup script completed!" -ForegroundColor Green
