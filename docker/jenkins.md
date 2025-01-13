```yml
docker pull jenkins/jenkins:2.440.2-lts
mkdir /home/docker
mkdir /home/jenkins
chown -R 1000:1000 /home/docker
chown -R 1000:1000 /home/jenkins
# 进入 /docker 目录 新建 docker-compose.yml文件 见 ./docker-compose.yml 文件

# 首次 sheel脚本
git submodule update --init --recursive
cd plm-vue-core
git checkout -- .
git clean -df
git checkout dev
git remote add upstream http://wu.yibo:88888888@1.116.82.129:10011/plm-vue/plm-vue-core.git

npm install --registry http://registry.npm.taobao.org
npm run build

# 后续 sheel脚本
git submodule update --init --recursive
cd plm-vue-core
git checkout -- .
git clean -df
git checkout dev
git pull upstream dev

npm install --registry http://registry.npm.taobao.org
npm run build
```

````




npm install --registry http://registry.npm.taobao.org
npm run build

```yml
Source files: dist/**
Remove prefix: dist
Remote directory: C:\test
````
