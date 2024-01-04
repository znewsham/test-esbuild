Run from services/app, some things to note

1. if you change shared/my-package-2/index.js to `import "colors"` - you'll see the issue isn't limited to local deps of local packages.
2. the js file present in shared/my-package can be considered to be auto-generated as part of a parallel build system that is out of scope. 

```
# This creates a build, but uses the JS file of my-package instead of the TS file
npx esbuild --preserve-symlinks --platform=node --bundle --outfile=build/index.js --format=esm index.js

# see "THIS SHOULD NEVER LOG"
node build/index.js

# This throws an error about missing dependency of my-package
npx esbuild --platform=node --bundle --outfile=build/index.js --format=esm index.js
```
