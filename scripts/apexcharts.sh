#!/bin/bash -e
target="dist/libs/apexcharts"
if [ ! -d $target ]; then
  mkdir $target
fi

cp -v node_modules/apexcharts/dist/apexcharts.esm.js $target/apexcharts.min.js
cp -v node_modules/apexcharts/dist/apexcharts.css $target/apexcharts.css
