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
  - `docker kill [name/ID]`: 直接停止
    - `-9`: 强行停止
  - `docker rm [name/ID]`: 删除容器
  - `docker rm ${docker pa -a -q}`: 删除所有容器
  - `docker image prune`: 删除已经停止的容器

## 安装 nginx

```yml
docker pull nginx
docker run -d -p 3000-3010:3000-3010 -p 80:80 -p 443:443 --name nginx -v /nginx/html:/usr/share/nginx/html -v /nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v /nginx/cert:/etc/nginx/cert -v /nginx/logs:/var/log/nginx nginx
```

## 制作个性化镜像

- `docker commit`: 基于已有容器创建一个新的镜像，以后可以基于自己的镜像创建容器
  - `-a`: 提交的镜像作者
  - `-c`: 使用 Dockerfile 指令来创建镜像
  - `-m`: 提交时的说明文字
  - `-p`: 在 commit 时，将容器暂停

```yml
docker commit -m"wmo的nginx" -a"wumo" 317936e0f375 wumo/nginx
```
