#!/bin/bash

# Load nvm
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
# This loads nvm
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Use a specific Node.js version
nvm use v22.2.0

# Get the directory where the script is located
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Change to that directory
cd "$DIR"

# Run npm install
npm install

# Build project
ionic build

# Build iOS
ionic cap sync

# Build iOS production
ionic capacitor sync ios --prod

# Run iOS
ionic capacitor run ios
