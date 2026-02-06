# WSL2(Windows Subsystem for Linux)

## Hypervisor 虚拟化平台

- windows 内核: windows用户空间
- linux 内核: linux用户空间

## 前提

- CPU 虚拟化
  - 任务管理器-性能(虚拟化-启用)(一般默认开启)
    - 手动开启
      - 进入BIOS设置
        - 找到虚拟化选项(VMX/AMD-V)
        - 开启CPU虚拟化
        - 保存设置
        - 重启电脑
- 开启两个windows功能
  - 适用于 Linux 的 Windows 子系统
  - 虚拟机平台

## 安装

```bash
wsl --install --web-download
```

## 常用命令

- `wsl --list --online`: 查看所有可用版本
- `wsl --install <版本名称> --web-download`: 安装指定版本
- `wsl --list --v`: 查看安装的版本
- `wsl --unregister <版本名称>`: 卸载系统
- `wsl --set-default <版本名称>`: 设置默认系统
- `wsl -d <版本名称>`: 启动系统
- `wsl -t <版本名称>`: 关闭指定系统
- `wsl --shutdown`: 关闭所有系统
- `wsl --export <版本名称> <压缩包的名字>`: 导出系统
- `wsl --import <版本名称> <目标目录> <压缩包的路径>`: 导入系统

## 子系统内常用命令

- `exit`: 退出系统
- `df -h`: 查看文件系统挂载情况
- `pwd`: 查看当前目录

## 子系统内调用 windows 命令

### 打开记事本

```bash
notepad.exe [文件路径]
# 直接编辑文件，保存后关闭记事本
```

### 打开资源管理器

```bash
explorer.exe [文件路径] # explorer.exe . 打开当前目录
# 直接编辑文件，保存后关闭记事本
```
