## 安装

```yml
## 下载nexus
cd /usr/local
wget https://dependency-fe.oss-cn-beijing.aliyuncs.com/nexus-3.29.0-02-unix.tar.gz
tar -zxvf ./nexus-3.29.0-02-unix.tar.gz
cd nexus-3.29.0-02

## 修改端口(进入这个文件修改 application-port 即可)
vim /usr/local/nexus-3.29.0-02/etc/nexus-default.properties

## 安装java (由于nexus需要jdk1.8版本。如果不是，就需要安装)
### 下载jdk https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html
### 放到 /usr/local/java 目录下
### 进入这个java目录解压
tar -zxvf jdk-8u162-linux-x64.tar.gz

## 修改nexus配置 (进入这个文件 cd /usr/local)
vim /usr/local/nexus-3.29.0-02/bin/nexus
### 将这个注释打开设置刚刚得jdk路径 INSTALL4J_JAVA_HOME_OVERRIDE=/usr/local/java/jdk1.8.0_162

## 启动nexus(进入这个目录 /usr/local/nexus-3.29.0-02/bin)
./nexus start
```

## 创建仓库

- 点击顶部小齿轮
- 点击左侧 Repository => Repositories => Create repository
  - hosted: 私有
  - proxy: 可以代理 npm 和淘宝镜像
  - group: 对外公开的仓库，集合了 hosted 和 proxy

## 搭建 npm 私服

https://www.cnblogs.com/niejunchan/p/14990360.html