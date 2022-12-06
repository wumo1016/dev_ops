## 介绍

- 用来是一个部署镜像的平台
- 可以使用集群来组织服务器
- 集群中存在一个 Master 节点(集群的控制节点, 负责调度集群中其他服务器的资源), 其他节点被称为 Node

## 安装必备组件

- `yum install vim wget ntpdate -y`

## pod

- k8s 中的最小调度单元
- 它里面可以包含多个容器

## deployment

- 通过 ReplicaSet(副本集)管理多个 pod 实例

## Service

- 以固定的 IP 地址以负载均衡的方式访问多个 pod 实例

## ingress

- 通过匹配规则访问不同的 Service
- 基于 nginx 实现

## 灰度发布

## 常用命令

- `kubectl get svc`: 查看服务, 同`kubectl get service`
