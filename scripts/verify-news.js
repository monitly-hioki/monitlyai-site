const fs = require('fs');
const path = require('path');
const dir = path.join(process.cwd(), 'content/news');
if (!fs.existsSync(dir)) process.exit(1);
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
if (files.length === 0) process.exit(2);
