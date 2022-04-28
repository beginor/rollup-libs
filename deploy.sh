#!/bin/bash -e

# default targets
target="/Users/${USER}/Developer/containers/nginx/html/dist"
target_url="http:\/\/localhost\/dist"

original_url="http:\/\/localhost:3000\/dist"

echo $1
echo $2

if [ ! -z $1 ]; then
    target=$1
fi

if [ ! -z $2 ]; then
    target_url=$2
fi

cp -f importmap.* dist

sed -i.bak "s/${original_url}/${target_url}/g" dist/importmap.json
sed -i.bak "s/${original_url}/${target_url}/g" dist/importmap.prod.json
rm -f dist/*.bak
rsync -rvz dist/importmap.* $target
rm -f dist/importmap.*

rsync -rvz dist/libs $target
rsync -rvz loader.js $target

