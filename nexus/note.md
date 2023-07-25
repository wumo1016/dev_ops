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

- 顶部小齿轮 => Repository => Repositories => Create repository
  - hosted: 私有
  - proxy: 可以代理 npm 和淘宝镜像
  - group: 对外公开的仓库，集合了 hosted 和 proxy

## [搭建 npm 私服](https://www.cnblogs.com/niejunchan/p/14990360.html)

- 创建 npm 私仓
  - 如果不使用默认的储存空间 可以先创建一个
  - Repository => Bolb Stores => Create blob store
- 创建用户
  - Security => Users => Create local user
- 设置权限
  - Security => Realms => 将 `npm Bearer Token Realm` 移到 Active 中去
- 登录
  - 局部注册
    - 项目根目录下执行 `npm login --registry=[仓库地址]`
      - 示例: `npm login --registry=http://[ip]:[端口]/repository/[仓库名]/`
    - 然后需要输入 nexus 创建的用户名、密码、邮箱
  - 全局注册
    - `npm adduser --registry=http://[ip]:[端口]/repository/[仓库名]/`
    - 然后需要输入 nexus 创建的用户名、密码、邮箱
- 发布
  - 项目根目录下执行 `npm publish --registry=[仓库地址]`
    - 示例: `npm publish --registry=http://[ip]:[端口]/repository/[仓库名]/`
    - 根目录必须有 package.json 文件
