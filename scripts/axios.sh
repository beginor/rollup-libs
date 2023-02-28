#!/bin/bash -e
target="dist/libs/axios"
if [ ! -d $target ]; then
  mkdir $target
fi

cp -v node_modules/axios/dist/esm/axios.js $target/axios.js
cp -v node_modules/axios/dist/esm/axios.min.js $target/axios.min.js
