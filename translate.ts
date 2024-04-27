import OpenAI from "openai";
import fs from "fs";
import path from "path";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API,
  baseURL: process.env.OPENAI_BASE_URL,
});

const extname = ".mdx";
const prompt =
  "将以下 mdx 文档翻译成中文，要求在中文和英文单词之间插入空格隔开，严格按照原 mdx 格式";

async function translate(content: string) {
  const response = await openai.chat.completions.create({
    messages: [
      { role: "user", content: prompt },
      { role: "user", content },
    ],
    model: "gpt-3.5-turbo-16k",
  });
  return response.choices[0].message.content || "";
}

async function main(targetPath: string) {
  const isDir = fs.statSync(targetPath).isDirectory();

  const files = isDir
    ? fs.readdirSync(targetPath).map((file) => path.join(targetPath, file))
    : [targetPath];

  for (const filePath of files) {
    const ext = path.extname(filePath);
    if (ext === extname) {
      const content = fs.readFileSync(filePath, "utf8");
      const translated = await translate(content);
      fs.writeFileSync(filePath, translated, "utf8");
      console.log(`已翻译：${path.basename(filePath)}`);
    } else {
      console.log(`未翻译：${path.basename(filePath)}`);
    }
  }
}

await main("src/content/documentation/docs/overview.mdx");
