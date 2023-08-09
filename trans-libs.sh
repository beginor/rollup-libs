#!/bin/bash -e
rm -rf dist/libs && mkdir -p dist/libs
FILES=$(ls scripts/*.sh)
for file in $FILES
do
  echo executing $file
  $file
done

# cleanup
rm -rf dist/chunks dist/main.*

# Gzip static files (*.js, *.css).
find dist/libs -type file -name "*.js" -print0 | xargs -0 gzip -k
find dist/libs -type file -name "*.css" -print0 | xargs -0 gzip -k
