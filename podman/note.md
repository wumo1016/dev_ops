## 介绍

- 特点
  - 无守护进程
  - 无需 root 权限

## 安装

- linux(ubuntu)

```bash
sudo apt update
sudo apt install podman

# 安装镜像
sudo apt install podman-docker
```

## 配置镜像地址

```bash
# 打开文件
sudo vi /etc/containers/registries.conf
# 添加以下代码

# docker-hub
[[registry]]
location = "docker.io"
  [[registry.mirror]]
    location = "docker.m.daocloud.io"
# 谷歌
[[registry]]
location = "gcr.io"
  [[registry.mirror]]
    location = "docker.m.daocloud.io"
```

## 安装镜像

```bash
# podman 不支持镜像简写, 必须指定完整路径
podman pull docker.io/library/nginx
```

## 常用命令

- `podman ps`: 查看容器

## pod
