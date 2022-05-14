#!/bin/bash -e
target="dist/libs/@ant-design"
if [ ! -d $target ]; then
  mkdir -p $target
fi
cp -rfv ./node_modules/@ant-design/icons-svg/inline-namespaced-svg $target/icons
