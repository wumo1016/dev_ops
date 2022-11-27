## [安装 java](https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html)

```yml
# 新版jenkins必须使用 11 版本
yum install epel-release
yum install java-11-openjdk-devel
```

## [安装 Jenkins](https://pkg.jenkins.io/redhat-stable/)

```yml
wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo --no-check-certificate
rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
yum install jenkins

## 设置端口与用户(非必须)
# 进入这个文件
vim /etc/sysconfig/jenkins
# 修改启动用户
JENKINS_USER="root"
# 修改启动端口
JENKINS_PORT="8000"
# 以上修改端口如果无效, 就进入下面这个文件修改 Environment="JENKINS_PORT=8080" 这个部分, 然后更新配置
vim /usr/lib/systemd/system/jenkins.service
systemctl daemon-reload

# 修改插件镜像
sed -i 's/http:\/\/updates.jenkins-ci.org\/download/https:\/\/mirrors.tuna.tsinghua.edu.cn\/jenkins/g' /var/lib/jenkins/updates/default.json && sed -i 's/http:\/\/www.google.com/https:\/\/www.baidu.com/g' /var/lib/jenkins/updates/default.json

# 启动
systemctl start jenkins

# 设置开机自启
systemctl enable jenkins

# 查看初始化密码
cat /root/.jenkins/secrets/initialAdminPassword

## 忘记密码
# 先找到jenkins的配置文件 如果jenkins启动了, 请先停止
find / -name config.xml
# 查看jenkins用户
cd /var/lib/jenkins/users
# 显示所有用户文件夹
ll
# 进入用户文件夹(示例)
cd [admin_17382633154898304334]
# 编辑这个文件
vim config.xml
# 修改密码。将标签passwordHash内的内容修改为下面的字符串, 值为admin, 然后重启jenkins。登录成功后可修改
#jbcrypt:$2a$10$U5k0o/d3wILeu5k0lHANlelEdqm60BY0RPawp1VvjYldUksiVsWVi

```

## 安装 git 仓库

- 生成公钥私钥 `ssh-keygen -t rsa -C "760478279@qq.com"`
  - `cat /root/.ssh/id_rsa.pub`: 进入这个文件, 复制公钥
- 在 gitee 中配置 Gitee 配置公钥
