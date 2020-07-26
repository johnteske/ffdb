import { promises as fs } from "fs";
import * as path from "path";

type DataResponse<T> = {
  content: T;
  filename: string;
};

// get data from JSON files in a specified subdirectory
export const getDataFrom = (directoryPath: string) =>
  async function getData<T>(subdir: string): Promise<DataResponse<T>[]> {
    // read directory
    const dir = path.join(directoryPath, subdir);
    const contents = await fs.readdir(dir, { withFileTypes: true });

    // filter for files only
    const filenames = contents
      .filter((dirent) => dirent.isFile())
      .map((dirent) => dirent.name);

    // read and parse JSON
    return await Promise.all(
      filenames.map(async (filename) => {
        const filepath = path.join(dir, filename);
        try {
          const content = JSON.parse(await fs.readFile(filepath, "utf-8"));
          return { content, filename };
        } catch (err) {
          throw new Error(`error while reading or parsing ${filename}`);
        }
      })
    );
  };
