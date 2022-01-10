#!/bin/bash -e
rsync -avz dist/libs lighthouse:~/docker/nginx/html/dist
rsync -avz importmap.* lighthouse:~/docker/nginx/html/dist
rsync -avz loader.js lighthouse:~/docker/nginx/html/dist
