## 替换字符串

```sh
# 将 Entering 'plm-vue-core' 或者 Entering 'core' 替换成 <div>git-core提交记录:</div>
echo "$GIT_CORE_LOG" | tr -d '\n' | sed "s/Entering '\(plm-vue-core\|core\)'/<div style='margin-bottom: 10px;'>git-core 提交记录:<\/div>/"
```
