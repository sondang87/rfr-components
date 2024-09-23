# Navigate to the project directory
# cd "rfr-components"

# Find the Chocolatey installation path
# $chocoInstallPath = (Get-ItemProperty -Path 'HKLM:\Software\Chocolatey' -Name chocolateyInstall).chocolateyInstall

# Construct the full path to refreshenv.cmd
# $refreshEnvCmdPath = Join-Path $chocoInstallPath 'bin\refreshenv.cmd'

# Run refreshenv.cmd to refresh environment variables
# & $refreshEnvCmdPath

# Run npm install
npm install

# Start the Ionic server
# ionic serve
