# el-table-drag

### 指令支持el-table横向拖拽滑动  

# 安装
```bash
npm i -S git+http://github.com/imzhudx/el-table-drag.git
```

# 引入
``` javascript  
//main.js
import 'el-table-horizontal-drag'
```

# 使用
```javascript
<el-table v-tableDrag ....
```

# 网页效果
### 按住cmd(mac)/ctrl(win) + 鼠标点击


# 起因
> el-table行数多滚动条超出屏幕，使用鼠标时横向滑动需要滚动屏幕找到表格下面的滚动条再拖动

# 扩展
> 可搭配 [el-table-horizontal-scroll](https://github.com/mizuka-wu/el-table-horizontal-scroll) 同时使用
> *2023-03-24 el-table-horizontal-scroll建议使用 1.2.1 版本，1.2.2版本改动使得同一页面仅支持一个表格*
