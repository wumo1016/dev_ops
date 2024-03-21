```yml
docker pull jenkins/jenkins:lts
mkdir /docker
chown -R 1000:1000 /docker
mkdir /jenkins
chown -R 1000:1000 /jenkins
# 进入 /docker 目录 新建 docker-compose.yml文件
version: '3'
services:
  jenkins:
    image: jenkins/jenkins:lts
    container_name: jenkins
    restart: always
    privileged: true
    ports:
      - '200:8080'
    volumes:
      - /jenkins:/var/jenkins_home
```
