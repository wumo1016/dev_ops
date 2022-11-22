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
