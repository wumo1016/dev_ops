## [YUM 包管理器](https://static.zhufengpeixun.com/grow/html/125.6.linux-install.html#t22.%20YUM%E5%9C%A8%E7%BA%BF%E7%AE%A1%E7%90%86)

- 介绍
  - 主要功能是更方便的添加/删除/更新 RPM 包.它能自动解决包的倚赖性问题
- 使用阿里云镜像
  ```yml
  mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
  wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
  yum makecache
  yum -y update //升级所有包同时也升级软件和系统内核
  ```
- `命令
  - `yum list`: 查询所有可用软件包列表
  - `yum search`: 关键字 搜索服务器上所有和关键字相关的包
  - `yum -y install`: 包名 -y 自动回答 yes install 安装
  - `yum -y update`: 包名 -y 自动回答 yes update 升级
  - `yum -y remove`: 包名 -y 自动回答 yes remove 卸载, 卸载有依赖性, 所以尽量不要卸载
  - `yum grouplist`: 列出所有可用的软件组列表
  - `yum groupinstall`: 软件组名 安装指定的组, 组名可以用 grouplist 查询
  - `yum groupremove`: 软件组名 卸载指定软件组
  - `yum makecache`: 更新缓存
