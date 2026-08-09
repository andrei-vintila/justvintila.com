#!/bin/sh
export PATH="/opt/homebrew/opt/node/bin:$PATH"
npm run build
exec npm run preview
