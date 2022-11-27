# 下载 java

```yml
https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html
jdk-11.0.16.1_linux-x64_bin.tar.gz

新建目录 /usr/java
将下载的 jdk 放到这里面
进入这个目录 解压 `tar -zxvf jdk-11.0.16.1_linux-x64_bin.tar.gz`

编辑这个文件 `vi /etc/profile`
加入下面部分

#java path config
export JAVA_HOME=/usr/java/jdk-11.0.16.1
export CLASSPATH=.:${JAVA_HOME}/jre/lib/rt.jar:${JAVA_HOME}/lib/dt.jar:${JAVA_HOME}/lib/tools.jar
export PATH=$PATH:${JAVA_HOME}/bin
```

- 执行 `source /etc/profile` 生效

## 下载 jenkins

```yml
https://www.jenkins.io/download/
新建目录 /usr/local/jenkins
将下载的tar放到这里面
进入这个目录 cd /usr/local/jenkins 执行
nohup java -jar jenkins.war --httpPort=8080 &
```
