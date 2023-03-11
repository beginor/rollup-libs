#!/bin/bash -e
rm -rf dist/libs && mkdir -p dist/libs
FILES=$(ls scripts/*.sh)
for file in $FILES
do
  echo executing $file
  $file
done
