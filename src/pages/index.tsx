import type { GetStaticProps } from "next";
import Link from "next/link";
import SEO from "@/components/SEO";
import DefaultLayout from "@/layouts/default";
import { allPosts, sortbyDate } from "@/utils/allPost";
import moment from "moment";
import { PostMetaProps } from "@/@types";

const Home = ({ posts }: { posts: PostMetaProps[] }) => {
  return (
    <DefaultLayout>
      <div className="pt-12 md:pt-24">
        <SEO title="Blog List" />
        <div className="px-4 mx-auto  md:max-w-screen-sm lg:max-w-screen-md">
          <h1 className="text-2xl text-slate-600 dark:text-slate-200 text-center font-semibold">
            Blog
          </h1>

          <section className="mt-8 mb-6">
            <div className="px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts &&
                posts.map(({ title, createdAt, description, slug }) => {
                  return (
                    <Link href={`/post/${slug}`} key={slug}>
                      <a className="group block px-6 border border-slate-200 dark:border-slate-700 rounded-lg">
                        <article className="pt-8 pb-3">
                          <h2 className="group-hover:text-slate-500 dark:group-hover:text-slate-400 transition-colors inline-block text-base md:text-md font-semibold text-slate-600 dark:text-slate-300 tracking-wide">
                            {title}
                          </h2>
                          <p className="pt-2.5 pb-6 md:pb-8 text-slate-500 dark:text-slate-400 text-tiny leading-8">
                            {description}
                          </p>
                          <time className="text-xs text-slate-400 dark:text-slate-500 block text-right">
                            {moment(createdAt).format("YYYY年M月D日")}
                          </time>
                        </article>
                      </a>
                    </Link>
                  );
                })}
            </div>
          </section>
        </div>
      </div>
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = allPosts();

  return {
    props: {
      posts: data.sort(sortbyDate),
    },
  };
};

export default Home;
