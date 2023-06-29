#!/bin/bash -e
target="dist/libs/@tabler"
if [ -d $target ]; then
  rm -rf $target
fi

mkdir -p $target

# cp -r node_modules/@tabler/core/dist dist/libs/@tabler/core
cp -r ../tabler/dist dist/libs/@tabler/core
cp -r node_modules/@tabler/icons dist/libs/@tabler/
