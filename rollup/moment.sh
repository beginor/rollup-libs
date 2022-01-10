#!/bin/bash -e
target="dist/libs/moment"
if [ ! -d $target ]; then
  mkdir $target
fi
pnpm exec esbuild --minify --legal-comments=none --charset=utf8 --log-level=error --outfile=$target/moment.js node_modules/moment/dist/moment.js

locale_target="$target/locale"
if [ ! -d "$locale_target" ]; then
  mkdir $locale_target
fi
cp -rfv node_modules/moment/dist/locale/zh-*.js $locale_target
grep ../moment -rl $locale_target | xargs sed -i.bak "s/..\/moment/..\/moment.js/g"
rm $locale_target/*.bak
