#!/bin/sh
# Dev server launcher: same as `npm run dev`, for tools that start a script.
exec node node_modules/next/dist/bin/next dev "$@"
