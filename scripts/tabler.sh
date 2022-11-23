#!/bin/bash -e
target="dist/libs/@tabler"
if [ ! -d $target ]; then
  mkdir $target
fi

cp -rv node_modules/@tabler/core/dist dist/libs/@tabler/core
cp -rv node_modules/@tabler/icons dist/libs/@tabler/
