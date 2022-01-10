#!/bin/bash -e
target="dist/libs/echarts"
if [ ! -d $target ]; then
  mkdir $target
fi

cp -v node_modules/echarts/dist/echarts.esm.js $target/echarts.js
cp -v node_modules/echarts/dist/echarts.esm.min.js $target/echarts.min.js
