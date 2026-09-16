# daily —— 每日速递网站

网址：https://suitaw.github.io/daily/ （GitHub Pages，main 分支根目录）

两个云端定时任务每天往这里写数据：北京时间 8:00 写 AI 资讯，8:30 写 GitHub 热门。
`index.html` 是单文件页面，读 `data/` 下的 `.js` 数据文件渲染。**定时任务只写数据文件，不改 `index.html`。**

## 文件

```
data/news/YYYY-MM-DD.js     每天一份 AI 资讯
data/github/YYYY-MM-DD.js   每天一份 GitHub 热门
data/*/index.js             日期列表，由 check.js 自动生成，不要手改
check.js                    校验所有数据文件 + 重新生成 index.js
```

## 数据文件格式

文件内容只有一句赋值，右边是**合法 JSON**（键和字符串都用双引号）：

```js
DAILY_DATA["news/2026-09-16"] = { ...JSON... };
```

键名必须是 `"类型/日期"`，和文件路径一致。参考已有文件照着写。

### 文本里能用的格式

所有文字字段只支持三种行内格式，其他 Markdown（标题、列表、表格、HTML）都会原样显示成字符：
- `` `代码` ``
- `**加粗**`
- `[文字](https://链接)`

`body` 里可以用 `\n` 分段。**中文引号一律用「」**，不要用英文双引号 `"`（JSON 里要转义，容易写坏）。

### AI 资讯 `data/news/D.js`

```json
{
  "date": "2026-09-16",
  "highlight": "今日看点：1~2 句话",
  "items": [
    {
      "emoji": "🚀",
      "title": "一句话新闻标题（不超过 30 字，不带序号）",
      "body": "3~5 句新闻事实",
      "explain": "📘 看不懂？先补点背景 —— 只写正文，不要带这个前缀",
      "opinion": "💡 我的看法 —— 只写正文，不要带这个前缀",
      "sources": [{ "name": "媒体名", "url": "https://..." }]
    }
  ]
}
```

### GitHub 热门 `data/github/D.js`

```json
{
  "date": "2026-09-16",
  "highlight": "今日看点",
  "items": [
    {
      "emoji": "🤖",
      "repo": "owner/name",
      "title": "一句话说它是干嘛的（不带仓库名和序号）",
      "lang": "Python",
      "stars": "30,942",
      "today": "2,072",
      "body": "2~4 句介绍",
      "explain": "背景正文",
      "opinion": "看法正文，最后一句「📱 手机上：……」",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "intro": "（可选）这一段开头的总说明",
          "steps": [
            { "text": "这一步做什么：", "code": "要复制的命令，多行用 \n 连接", "after": "（可选）命令后面的补充说明" },
            { "text": "没有命令的步骤可以不写 code" }
          ],
          "done": "装好的标志（只写正文）"
        }
      ],
      "url": "https://github.com/owner/name"
    }
  ]
}
```

- `lang` / `stars` / `today` 抓不到就**整个字段不写**，不要编；只有本周新增星数时写 `"week": "17,658"`（页面显示「本周 +」）
- `install` 按平台分段，手机和电脑各一段；不用安装的内容类项目，段标题写「怎么看（不用安装）」
- 步骤编号由页面自动加 ①②③，`text` 里不要再写编号

## 写完之后（必须照做）

```bash
node check.js          # 必须输出「✅ 全部通过」；报错就按提示改数据文件，再跑，直到通过
git add data/
git commit -m "AI 资讯 2026-09-16"      # 或「GitHub 热门 2026-09-16」
git push origin HEAD:main
```

push 被拒（另一个任务刚推过）：`git pull --rebase origin main` → 再跑 `node check.js` →
有改动就 `git add data/ && git commit --amend --no-edit` → 再 push。两个任务写的是不同目录，不会真冲突。
