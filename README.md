## 前端运维

- linux
- nginx
- docker
- mongodb mysql redis
- jenkins
- k8s
- cicd 灰度发布

## 初始化

```yml
# 设置用户名
hostnamectl set-hostname wumo

# 安装docker
yum install -y yum-utils device-mapper-persistent-data lvm2
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
yum install docker-ce -y
systemctl start docker
systemctl enable docker
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://ig0kq17f.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker

# 生成公钥私钥 公钥(cat /root/.ssh/id_rsa.pub) 私钥(cat /root/.ssh/id_rsa)
ssh-keygen -t rsa -C "760478279@qq.com"

# 安装git
yum install git -y
```
