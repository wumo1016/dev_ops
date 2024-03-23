```yml
docker pull jenkins/jenkins:lts
mkdir /docker
mkdir /jenkins
chown -R 1000:1000 /docker
chown -R 1000:1000 /jenkins
# 进入 /docker 目录 新建 docker-compose.yml文件 见 ./docker-compose.yml 文件

# sheel脚本
git submodule update --init --recursive
cd plm-vue-core
git checkout -- .
git clean -df
git checkout dev
# git remote add upstream http://user:password@url
git pull upstream dev
```
