## 介绍

- Docker 属于 Linux 容器的一种封装，提供简单易用的容器使用接口。它是目前最流行的 Linux 容器解决方案
- Docker 将应用程序与该程序的依赖，打包在一个文件里面。运行这个文件，就会生成一个虚拟容器。程序在这个虚拟容器里运行，就好像在真实的物理机上运行一样

## 安装

- yum-utils
- device mapper
  - Device Mapper 是 Linux2.6 内核中支持逻辑卷管理的通用设备映射机制，它为实现用于存储资源管理的块设备驱动提供了一个高度模块化的内核架构。
  - device-mapper-persistent-data 和 lvm2 两者都是 Device Mapper 所需要的

```js
yum install -y yum-utils device-mapper-persistent-data   lvm2 #安装工具
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo #设置安装源
yum install docker-ce docker-ce-cli containerd.io -y #安装社区版
```
