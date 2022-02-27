import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { PostMetaProps } from "@/@types";
import moment from "moment";

/**
 * @全てのポストのfrontmatterとポストIDを取得
 */
export const allPosts = (): PostMetaProps[] => {
  const folderPath = join(process.cwd(), "content");
  const allFile = fs.readdirSync(folderPath, "utf8");

  const data = allFile.map((slug) => {
    const postPath = join(folderPath, `${slug}/index.mdx`);
    const raw = fs.readFileSync(postPath, "utf8");
    const { data } = matter(raw);

    return { ...data, slug };
  });

  return data;
};

/**
 * order by DESC
 */
export const sortbyDate = (a: PostMetaProps, b: PostMetaProps) => {
  return moment(b.createdAt).diff(moment(a.createdAt));
};
