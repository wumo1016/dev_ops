## 集成 git 仓库

- 生成公钥私钥 `ssh-keygen -t rsa -C "760478279@qq.com"`
  - `cat /root/.ssh/id_rsa.pub`: 进入这个文件, 复制公钥
- 在 gitee 中配置 Gitee 配置公钥

## 安装 jenkins

- 安装 java: `yum install -y java`
- 安装 jenkins

```yml
sudo wget -O /etc/yum.repos.d/jenkins.repo https://img.zhufengpeixun.com/jenkins.repo
sudo rpm --import https://img.zhufengpeixun.com/jenkins.io.key
yum install jenkins -y
```

- 启动 Jenkins: `systemctl start jenkins.service`
- 开放端口

```yml
firewall-cmd --zone=public --add-port=8080/tcp --permanent
firewall-cmd --zone=public --add-port=50000/tcp --permanent
systemctl reload firewalld
```

- 查看密码: `cat /var/lib/jenkins/secrets/initialAdminPassword`
- 修改插件镜像

```yml
sed -i 's/http:\/\/updates.jenkins-ci.org\/download/https:\/\/mirrors.tuna.tsinghua.edu.cn\/jenkins/g' /var/lib/jenkins/updates/default.json && sed -i 's/http:\/\/www.google.com/https:\/\/www.baidu.com/g' /var/lib/jenkins/updates/default.json
```

- 添加到 docker 用户组里

```yml
sudo gpasswd -a jenkins docker  #将当前用户添加至docker用户组
newgrp docker                 #更新docker用户组
```

## 安装 java

```yml
yum install -y java
java -version
```

```yml
# 设置jenkins端口与用户
vim /etc/sysconfig/jenkins
JENKINS_USER="root"
JENKINS_PORT="8099"
```

wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
rpm --import https://jenkins-ci.org/redhat/jenkins-ci.org.key
yum install jenkins

https://www.jianshu.com/p/5ca07cca1578?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation
https://blog.csdn.net/weixin_59006343/article/details/126421353