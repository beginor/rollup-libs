#!/bin/bash -e
target="dist/libs/vue"
if [ ! -d $target ]; then
  mkdir $target
fi

cp -v node_modules/vue/dist/vue.esm-browser.js $target/vue.js
cp -v node_modules/vue/dist/vue.esm-browser.prod.js $target/vue.min.js
