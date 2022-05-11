#!/opt/homebrew/bin/python3
from os import system

targets = {
    '~/Developer/containers/nginx/html/dist': 'http://localhost/dist',
    # '~/Developer/python/geep/client/dist': 'http://172.32.32.206/geep/web/dist',
    # 'lighthouse:~/docker/nginx/html/dist': 'http://81.71.93.249/dist',
    # 'htaly:/mnt/nginx/html/dist': 'http://112.74.67.213:8080/dist',
    # 'agsserver:/mnt/data/docker/nginx/html/arcgis-js-api/dist': 'https://it.gdeei.cn/arcgis-js-api/dist',
    # 'agsportal:/mnt/data/docker/nginx/html/arcgis-js-api/dist': 'https://app.gdeei.cn/arcgis-js-api/dist',
}

def copy_to(source: str, target: str):
    command = 'rsync -rz ' if target.find(':') > 0 else 'cp -rf '
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
    copy_to('loader.js', target)

for key in targets.keys():
    deploy_to(key, targets[key])
