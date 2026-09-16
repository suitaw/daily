// 校验 data/ 下所有日报文件，并重新生成 data/news/index.js、data/github/index.js
// 用法：node check.js        （有错误时退出码为 1，并打印哪个文件哪里不对）
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, 'data');
const errors = [];

function need(cond, file, msg) {
  if (!cond) errors.push(`${file}：${msg}`);
}
const str = v => typeof v === 'string' && v.trim() !== '';

const RULES = {
  news(d, f) {
    d.items.forEach((it, i) => {
      const at = `第 ${i + 1} 条`;
      need(str(it.title), f, `${at} 缺 title`);
      need(str(it.body), f, `${at} 缺 body`);
      need(str(it.explain), f, `${at} 缺 explain`);
      need(str(it.opinion), f, `${at} 缺 opinion`);
      need(Array.isArray(it.sources) && it.sources.length > 0, f, `${at} 缺 sources`);
      (it.sources || []).forEach(s => need(str(s.name) && /^https?:\/\//.test(s.url || ''), f, `${at} 的来源格式不对：${JSON.stringify(s)}`));
    });
  },
  github(d, f) {
    d.items.forEach((it, i) => {
      const at = `第 ${i + 1} 个项目`;
      need(/^[\w.-]+\/[\w.-]+$/.test(it.repo || ''), f, `${at} 的 repo 要写成 owner/name`);
      need(str(it.title), f, `${at} 缺 title`);
      need(str(it.body), f, `${at} 缺 body`);
      need(str(it.explain), f, `${at} 缺 explain`);
      need(str(it.opinion), f, `${at} 缺 opinion`);
      need(Array.isArray(it.install) && it.install.length > 0, f, `${at} 缺 install`);
      (it.install || []).forEach((sec, k) => {
        need(str(sec.title), f, `${at} 的第 ${k + 1} 段 install 缺 title`);
        need(Array.isArray(sec.steps) && sec.steps.length > 0, f, `${at} 的第 ${k + 1} 段 install 缺 steps`);
        (sec.steps || []).forEach((st, j) => need(str(st.text), f, `${at} 第 ${k + 1} 段第 ${j + 1} 步缺 text`));
      });
    });
  }
};

for (const type of Object.keys(RULES)) {
  const dir = path.join(ROOT, type);
  fs.mkdirSync(dir, { recursive: true });
  const dates = [];
  for (const name of fs.readdirSync(dir).sort()) {
    if (name === 'index.js') continue;
    const f = `data/${type}/${name}`;
    const m = name.match(/^(\d{4}-\d{2}-\d{2})\.js$/);
    if (!m) { errors.push(`${f}：文件名必须是 YYYY-MM-DD.js`); continue; }
    const key = `${type}/${m[1]}`;
    const ctx = { DAILY_DATA: {} };
    try {
      vm.runInNewContext(fs.readFileSync(path.join(dir, name), 'utf8'), ctx, { filename: f });
    } catch (e) {
      errors.push(`${f}：JS 语法/运行错误 → ${e.message}`);
      continue;
    }
    const keys = Object.keys(ctx.DAILY_DATA);
    const d = ctx.DAILY_DATA[key];
    if (keys.length !== 1 || !d) { errors.push(`${f}：必须且只能写 DAILY_DATA["${key}"] = {...}`); continue; }
    need(str(d.highlight), f, '缺 highlight（今日看点）');
    need(Array.isArray(d.items) && d.items.length > 0, f, '缺 items');
    if (Array.isArray(d.items)) RULES[type](d, f);
    dates.push(m[1]);
  }
  dates.sort().reverse();
  fs.writeFileSync(path.join(dir, 'index.js'),
    `// 由 check.js 自动生成，不要手改\nDAILY_INDEX[${JSON.stringify(type)}] = ${JSON.stringify(dates)};\n`);
  console.log(`${type}：${dates.length} 天，最新 ${dates[0] || '无'}`);
}

if (errors.length) {
  console.error('\n❌ 发现问题：\n' + errors.map(e => '  - ' + e).join('\n'));
  process.exit(1);
}
console.log('✅ 全部通过');
