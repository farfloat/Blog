import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { PostMetaProps } from "@/@types";
import moment from "moment";

/**
 * @全てのカテゴリー
 */
export const listCategories = () => {
  const folderPath = join(process.cwd(), "content");
  const allFile = fs.readdirSync(folderPath, "utf8");

  const data = allFile.reduce<string[]>((acc, slug) => {
    const postPath = join(folderPath, `${slug}/index.mdx`);
    const raw = fs.readFileSync(postPath, "utf8");
    const { data } = matter(raw);
    const cat = data?.category;

    if (cat) {
      return [...acc, cat];
    } else return acc;
  }, []);

  return Array.from(new Set(data));
};

/**
 * order by DESC
 */
export const sortbyDate = (a: PostMetaProps, b: PostMetaProps) => {
  return moment(b.createdAt).diff(moment(a.createdAt));
};
