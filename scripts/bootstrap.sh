#!/bin/bash -e
target="dist/libs/bootstrap"
if [ ! -d $target ]; then
  mkdir $target
fi
cp -v node_modules/bootstrap/dist/css/*.min.css $target
cp -v node_modules/bootstrap/dist/js/bootstrap.esm.js $target/bootstrap.js
cp -v node_modules/bootstrap/dist/js/bootstrap.esm.min.js $target/bootstrap.min.js
