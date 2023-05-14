#!/opt/homebrew/bin/python3.9
from os import system

targets = {
    '~/Developer/containers/nginx/app/html/dist': 'http://127.0.0.1/dist',
    'lighthouse:~/docker/nginx/html/dist': 'http://81.71.93.249/dist',
    'ubuntu_zhang:~/Docker/nginx/html/dist': 'http://192.168.8.8/dist',
    'agsdb01:/mnt/data/docker/nginx/it/html/arcgis-js-api/dist': 'https://it.gdeei.cn/arcgis-js-api/dist',
    'agsdb01:/mnt/data/docker/nginx/app/html/arcgis-js-api/dist': 'https://app.gdeei.cn/arcgis-js-api/dist',
    # '~/Developer/python/geep/client/dist': 'http://172.32.32.206/geep/web/dist',
}


def copy_to(source: str, target: str):
    command = 'rsync -rzh --stats ' if target.find(':') > 0 else 'cp -rf '
    command = f'{command} {source} {target}'
    system(command)


def deploy_to(target: str, target_url: str):
    print(f'deploy to {target} , target url is {target_url}')
    #
    original_url= 'http://localhost:3000/dist'.replace('/', '\/')
    target_url = target_url.replace('/', '\/')
    system('cp -f importmap.* dist')
    # cmd = f'sed -i.bak "s/{original_url}/{target_url}/g" dist/importmap.json';
    # print(cmd)
    system(f'sed -i.bak "s/{original_url}/{target_url}/g" dist/importmap.json')
    system(f'sed -i.bak "s/{original_url}/{target_url}/g" dist/importmap.prod.json')
    system('rm -f dist/*.bak')
    copy_to('dist/importmap.*', target)
    system('rm -f dist/importmap.*')
    copy_to('dist/libs', target)
    copy_to('dist/loader.*', target)


for key in targets.keys():
    deploy_to(key, targets[key])
