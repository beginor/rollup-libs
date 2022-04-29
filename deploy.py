#!/bin/bash -e

declare -a dests
declare -a urls

dests+=("/Users/${USER}/Developer/containers/nginx/html/dist")
urls+=('http:\/\/localhost\/dist')

dests+=('lighthouse:~/docker/nginx/html/dist')
urls+=('http:\/\/81.71.93.249\/dist')

dests+=('htaly:/mnt/nginx/html/dist')
urls+=('http:\/\/112.74.67.213:8080\/dist')

function deploy_to {
    if [ $# -eq 2 ]; then
        local target=$1
        local target_url=$2
    else
        echo "deploy_to needs two arguments"
        exit 1
    fi

    echo "deploy to $target , target url is: $target_url"
    # process importmap.json first
    local original_url="http:\/\/localhost:3000\/dist"
    cp -f importmap.* dist
    sed -i.bak "s/${original_url}/${target_url}/g" dist/importmap.json
    sed -i.bak "s/${original_url}/${target_url}/g" dist/importmap.prod.json
    rm -f dist/*.bak
    rsync -rvz dist/importmap.* $target
    rm -f dist/importmap.*
    # rsync libs
    rsync -rz dist/libs $target
    rsync -rvz loader.js $target
}

for i in ${!dests[@]}; do
    deploy_to ${dests[$i]} ${urls[$i]}
done
