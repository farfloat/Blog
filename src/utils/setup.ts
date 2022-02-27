import fs from "fs";
import { join } from "path";
import { bundleMDX } from "mdx-bundler";
import { remarkMdxImages } from "remark-mdx-images";
import { extractMetaString } from "@/utils/extractMetaString";
import { frontmatterProps } from "@/@types";

/**
 * ポストIDを指定してポストのfrontmatterとポスト内容を取得
 * @param {String} slug スラグ
 */
export const SetUp = async (slug: string) => {
  const folderPath = join(process.cwd(), "content");
  const postPath = join(folderPath, `${slug}/index.mdx`);
  const raw = fs.readFileSync(postPath, "utf8");

  const { code, frontmatter } = await bundleMDX<frontmatterProps>({
    source: raw,
    cwd: join(process.cwd(), "content", slug),
    xdmOptions: (options) => ({
      ...options,
      remarkPlugins: [...(options.remarkPlugins ?? []), remarkMdxImages],
      rehypePlugins: [...(options.rehypePlugins ?? []), extractMetaString],
    }),
    esbuildOptions: (options) => ({
      ...options,
      outdir: join(process.cwd(), "/public/images", slug),
      loader: {
        ...options.loader,
        ".png": "file",
        ".jpeg": "file",
        ".jpg": "file",
        ".gif": "file",
      },
      publicPath: `/images/${slug}`,
      write: true,
    }),
  });

  return {
    content: code,
    frontmatter,
  };
};
