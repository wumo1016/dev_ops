## 安装 node 插件

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
