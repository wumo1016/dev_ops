## 忘记密码

- 如果 jenkins 启动了, 请先停止 `systemctl stop jenkins`
- 查看 jenkins 的家目录 `cat /etc/sysconfig/jenkins`
  - 找到这里 `JENKINS_HOME="/var/lib/jenkins" ` 值对应的就是家目录
- 查看所有用户 `cd /var/lib/jenkins/users`
- 显示所有用户文件夹 `ll`
- 进入用户文件夹(示例) `cd admin_17382633154898304334`
- 编辑这个文件 `vim config.xml`
- 修改密码。将标签 passwordHash 内的内容修改为下面的字符串, 值为 admin, 然后重启 jenkins。登录成功后可修改
  `#jbcrypt:$2a$10$U5k0o/d3wILeu5k0lHANlelEdqm60BY0RPawp1VvjYldUksiVsWVi`

## 安装 node 插件

到 jenkins 插件管理中搜索`nodejs`即可

## 添加 node 环境

jenkins => 系统管理 => 全局工具配置 => NodeJS

## 源码管理 1

- 使用 https 地址, 添加账户名密码

## 源码管理 2

- 使用 ssh 地址

## 执行 sheel

```yml
#!/bin/bash
npm install --registry=https://registry.npm.taobao.org
npm run build
docker build -t viteproject:1.0.0 .
```

## 添加 docker 权限

```yml
usermod -aG docker jenkins
systemctl restart jenkins
```

## 查看 jenkins 所属用户

`ps -ef | grep jenkins`

<!--
npm install --registry=https://registry.npm.taobao.org
npm run build
docker stop ${JOB_BASE_NAME}
docker rm ${JOB_BASE_NAME}
docker rmi ${JOB_BASE_NAME}
docker build -t ${JOB_BASE_NAME} .
docker run -d -p 80:80 --name ${JOB_BASE_NAME} ${JOB_BASE_NAME}
 -->
