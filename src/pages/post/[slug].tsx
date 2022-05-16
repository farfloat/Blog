import { GetStaticPaths, GetStaticProps } from "next";
import { SetUp } from "@/utils/setup";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import moment from "moment";
import { MdxComponents } from "@/utils/MdxComponents";
import PostLayout from "@/layouts/postLayout";
import SEO from "@/components/SEO";
import { allPosts } from "@/utils/allPost";
import { PostProps } from "@/@types";
import SocialContainer from "@/components/Social";

const Post = ({ content, frontmatter, slug }: PostProps) => {
  const MDX = useMemo(() => getMDXComponent(content), [content]);
  const { title, description, createdAt } = frontmatter;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <PostLayout>
      <div className="pt-16 md:pt-24">
        <SEO {...{ title, description }} />
        <div className="px-8 mx-auto md:max-w-screen-sm lg:max-w-screen-md">
          <h1 className="text-center font-semibold text-[3rem] leading-normal md:leading-relaxed text-slate-700 mb-20">
            {title}
          </h1>
          <time className="block text-[1.3rem] text-slate-500 italic">
            <span className="text-[1.1rem]">Created At</span> {moment(createdAt).format("YYYY.M.D")}
          </time>
          <div className="mt-6 md:mt-10 text-slate-700 dark:text-slate-300">
            <MDX components={MdxComponents} />
          </div>
          <div className="pt-24 pb-20">
            <SocialContainer url={`${siteUrl}/post/${slug}`} size={40} />
          </div>
        </div>
      </div>
    </PostLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const { content, frontmatter } = await SetUp(slug);

  return {
    props: {
      content,
      frontmatter,
      slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = allPosts();
  return {
    paths: data.map(({ slug }) => {
      return { params: { slug } };
    }),
    fallback: false,
  };
};
export default Post;
