## 执行 sheel

```yml
#!/bin/bash
npm install --registry=https://registry.npm.taobao.org
npm run build
docker build -t viteproject:1.0.0 .
```
