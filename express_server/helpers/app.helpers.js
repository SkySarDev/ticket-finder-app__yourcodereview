import fs from "fs";
import path from "path";

const __dirname = path.resolve();

export const readFileHelper = (filePath) => {
  try {
    const result = fs.readFileSync(`${__dirname}/${filePath}`, "utf-8");

    return JSON.parse(result);
  } catch (err) {
    return null;
  }
};
