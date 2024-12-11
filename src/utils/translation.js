import fs from "fs";
import path from "path";

export async function fetchTranslations(locale) {
  const filePath = path.resolve("src/i18n", `${locale}.json`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent);
}
