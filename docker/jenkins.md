```yml
docker pull jenkins/jenkins:lts
mkdir /docker
mkdir /jenkins
chown -R 1000:1000 /docker
chown -R 1000:1000 /jenkins
# 进入 /docker 目录 新建 docker-compose.yml文件
version: '3'
services:
  jenkins:
    image: jenkins/jenkins:2.440.1-lts
    container_name: jenkins
    restart: always
    privileged: true
    ports:
      - '200:8080'
    volumes:
      - /jenkins:/var/jenkins_home
```
