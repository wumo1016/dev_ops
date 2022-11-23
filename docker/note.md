## 介绍

- Docker 属于 Linux 容器的一种封装，提供简单易用的容器使用接口。它是目前最流行的 Linux 容器解决方案
- Docker 将应用程序与该程序的依赖，打包在一个文件里面。运行这个文件，就会生成一个虚拟容器。程序在这个虚拟容器里运行，就好像在真实的物理机上运行一样
- 运行后有客户端和服务端
  - 服务端: 在后台运行，接收指令
  - 客户端: 发送指令

## 安装

- yum-utils
- device mapper
  - Device Mapper 是 Linux2.6 内核中支持逻辑卷管理的通用设备映射机制，它为实现用于存储资源管理的块设备驱动提供了一个高度模块化的内核架构。
  - device-mapper-persistent-data 和 lvm2 两者都是 Device Mapper 所需要的
- containerd.io: 容器管理工具

```yml
yum install -y yum-utils device-mapper-persistent-data lvm2 #安装工具
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo #设置安装源
yum install docker-ce docker-ce-cli containerd.io -y #安装社区版
```

## 启动

```yml
systemctl start docker
```

## [阿里云加速](https://cr.console.aliyun.com/cn-shanghai/instances/mirrors)

```yml
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://ig0kq17f.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

## 停止

```yml

```

## 卸载

```yml
yum remove docker
rm -rf /var/lib/docker
```

## 常用命令

- `docker version`: 查看 docker 版本
- `docker indo`: 查看 docker 信息

## 镜像

- 常用命令
  - `docker search [imageName]`: 查找镜像
  - `docker pull [imageName]`: 拉取镜像
  - `docker images`: 列出所有镜像
  ```js
  REPOSITORY: 仓库地址
  TAG: 标签
  IMAGE_ID: 镜像ID
  CREATED: 创建时间
  SIZE: 镜像大小
  ```
  - `docker rmi [imageName] -f`: 删除镜像
  - `docker history [imageName]`: 查看镜像提交历史
  - `docker inspect [imageName]`: 显示镜像详细信息
  - `docker export -o [输出名].tar [镜像ID]`: 导出镜像
  - `docker import [name].tar [REPOSITORY[:TAG]]`: 导入镜像
  - `docker save -o [输出名].tar [镜像ID]`: 保存镜像(export 会丢失元信息(REPOSITORY, TAG 等))
  - `docker load -i [name].tar`: 加载 tar 文件并创建镜像
- 制作个性化镜像
  - `docker commit`: 基于已有容器创建一个新的镜像，以后可以基于自己的镜像创建容器
    - `-a`: 提交的镜像作者
    - `-c`: 使用 Dockerfile 指令来创建镜像
    - `-m`: 提交时的说明文字
    - `-p`: 在 commit 时，将容器暂停
  ```yml
  docker commit -m"wmo的nginx" -a"wumo" 317936e0f375 wumo/nginx
  ```
- 发布镜像

  ```yml
  docker login
  # docker image tag [imageName] [username]/[repository]:[tag]
  # docker image build -t [username]/[repository]:[tag] .
  # docker tag express-demo zhangrenyang/express-demo:v1
  docker push zhangrenyang/express-demo:v1
  ```

## 容器

- 介绍
  - `docker run` 命令会根据镜像文件，生成一个正在运行的容器实例(如果发现本地没有指定的 image 文件，就会从仓库自动抓取)
  - 容器生成后，会生成一个文件，叫容器文件
- 常用命令
  - `docker ps`: 查看正在运行的容器
    - `-a`: 查看所有容器
  - `docker run [imageName]`: 创建一个容器
    - `--name [容器名]`: 设置容器名
    - `-p [真实端口]:[容器端口]`: 映射端口
    - `-d`: 运行到后台
  - `docker start [name/ID]`: 启动容器
  - `docker restart [name/ID]`: 重启容器
  - `docker stop [name/ID]`: 停止容器(有序停止)
    - `docker stop ${docker ps -aq}`: 停止所有容器
  - `docker kill [name/ID]`: 直接停止
    - `-9`: 强行停止
  - `docker rm [name/ID]`: 删除容器
    - `docker rm ${docker ps -aq}`: 删除所有容器
    - `docker image prune`: 删除已经停止的容器
  - `docker port [name/ID]`: 查看容器的端口映射
  - `docker exec -it [name/ID] /bin/bash`: 进入容器内部执行命令
  - `docker cp [name/ID]:/root/root.txt .`: 从容器里面，将文件拷贝到本机

## Dockerfile

- 文件内指令
  - `FROM [name/ID]`: 构建的新镜像是基于哪个镜像
  - `WORKDIR [目录]`: 为 RUN、CMD、ENTRYPOINT、COPY、ADD 等命令设置工作目录
  - `MAINTAINER [name]`: 镜像作者
  - `RUN [命令]`: 构建镜像时运行的 shell 命令
    - 例如 s 构建 npm 包: `RUN npm install`
  - `ADD [源文件/源目录/源URL] [目标目录/目标文件]`: 拷贝文件或目录到镜像中，如果是 URL 或者压缩包会自动下载和解压
  - `COPY [源文件/源目录] [目标目录/目标文件]`: 拷贝文件或目录到镜像中去
  - `ENTRYPOINT [命令]`: 配置容器启动时运行的命令
    - 例如: `ENTRYPOINT /bin/bash -c '/start.sh'`
  - `VOLUME [[目录]]`: 指定容器挂载点到宿主自动生成的目录或其它容器
  - `USER [用户名]`: 为 RUN、CMD、ENTRYPOINT、COPY、ADD 等命令指定运行用户
  - `EXPOSE [端口]`: 声明容器运行的服务器端口
- `.dockerignore`文件
  - 表示要排除，不要打包到 image 中的文件路径
- 构建镜像
  - `docker build -t [镜像名称]:[TAG]`
    - `-f`: 指定 Dockerfile(不指定就默认寻找)

## 数据盘

- 介绍: 删除容器的时候，容器层里创建的文件也会被删除掉，如果有些数据你想永久保存，比如 Web 服务器的日志，数据库管理系统中的数据，可以为容器创建一个数据盘

## 网络

- 安装 Docker 时，它会自动创建三个网络，bridge（创建容器默认连接到此网络）、 none 、hos
  - `None`：该模式关闭了容器的网络功能,对外界完全隔离
  - `host`：容器将不会虚拟出自己的网卡，配置自己的 IP 等，而是使用宿主机的 IP 和端口。
  - `bridge`: 桥接网络，此模式会为每一个容器分配 IP，默认模式

## compose

- 介绍
  - Compose 通过一个配置文件来管理多个 Docker 容器
- 安装

```yml
## 方式一
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
# 添加可执行权限
sudo chmod +x /usr/local/bin/docker-compose
# 查看版本信息
docker-compose -version

## 方式二
yum -y install epel-release
yum -y install python-pip
yum clean all
pip install docker-compose
```

- 配置文件 `docker-compose.yml`
  - 空格缩进表示层次
  - 冒号空格后面有空格
  ```yml
  version: '2'
  services:
    nginx1:
      image: nginx
      ports:
        - '8080:80'
    nginx2:
      image: nginx
      ports:
        - '8081:80'
  ```
- 常用命令
  - `docker-compose up`: 启动所有的服务
  - `docker-compose up -d`: 后台启动所有的服务
  - `docker-compose ps`: 打印所有的容器
  - `docker-compose stop`: 停止所有服务
  - `docker-compose logs -f`: 持续跟踪日志
  - `docker-compose exec nginx1 bash`: 进入 nginx1 服务系统
  - `docker-compose rm nginx1`: 删除服务容器
  - `docker network ls`: 查看网络网络不会删除
  - `docker-compose down`: 删除所有的网络和容器
- 配置数据卷

```yml
version: '3'
services:
  nginx1:
    image: nginx
    ports:
      - '8081:80'
    networks:
      - 'newweb'
    volumes:
      - 'data:/data'
      - './nginx1:/usr/share/nginx/html'
  nginx2:
    image: nginx
    ports:
      - '8082:80'
    networks:
      - 'default'
    volumes:
      - 'data:/data'
      - './nginx2:/usr/share/nginx/html'
  nginx3:
    image: nginx
    ports:
      - '8083:80'
    networks:
      - 'default'
      - 'newweb'
    volumes:
      - 'data:/data'
      - './nginx3:/usr/share/nginx/html'
networks:
  newweb:
    driver: bridge
volumes:
  data:
    driver: local
```

## 安装 nginx

```yml
docker pull nginx
docker run -d -p 3000-3010:3000-3010 -p 80:80 -p 443:443 --name nginx -v /nginx/html:/usr/share/nginx/html -v /nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v /nginx/cert:/etc/nginx/cert -v /nginx/logs:/var/log/nginx nginx
```

<!--
dist/**,Dockerfile,default.conf

cd  /data/${JOB_BASE_NAME}
docker stop ${JOB_BASE_NAME}
docker rm -f ${JOB_BASE_NAME}
docker rmi $(docker images -f "dangling=true" -q)
docker rmi -f $(docker images -f "label=${JOB_BASE_NAME}" -q)
docker build -t ${JOB_BASE_NAME} .
docker run  --restart=always  --name ${JOB_BASE_NAME}   -p 25555:80 -d ${JOB_BASE_NAME}
 -->
