import type { GetStaticProps } from "next";
import Link from "next/link";
import SEO from "@/components/SEO";
import DefaultLayout from "@/layouts/default";
import { allPosts, sortbyDate } from "@/utils/allPost";
import moment from "moment";
import { PostMetaProps } from "@/@types";
import { Update } from "@styled-icons/material/Update";
import { AccessTime } from "@styled-icons/material/AccessTime";

const Home = ({ posts }: { posts: PostMetaProps[] }) => {
  return (
    <DefaultLayout>
      <div className="pt-12 md:pt-24">
        <SEO title="Blog" />
        <div className="px-4 mx-auto  md:max-w-screen-sm lg:max-w-screen-md">
          <h1 className="text-5xl text-slate-700 dark:text-slate-200 font-semibold">Blog</h1>
          <section className="mt-8 mb-6">
            <div className="px-4">
              {posts &&
                posts.map(({ title, createdAt, updatedAt, description, slug, tags }) => {
                  return (
                    <Link href={`/post/${slug}`} key={slug}>
                      <a className="block w-full border-b border-slate-200 dark:border-slate-500">
                        <article className="pt-8 pb-4 relative">
                          <h2 className="inline-block text-lg md:text-2xl font-semibold text-slate-700 dark:text-slate-200 tracking-wide">
                            {title}
                          </h2>
                          <p className="pt-6 pb-6 md:pb-8 text-slate-600 dark:text-slate-300 md:text-md tracking-wide leading-8 font-normal">
                            {description}
                          </p>
                          <div className="flex flex-wrap gap-4">
                            {tags.map((tag) => {
                              return (
                                <div
                                  key={tag}
                                  className="px-4 py-1 rounded border border-sky-600 dark:border-sky-600 dark:text-sky-500 text-sky-600 text-tiny"
                                >
                                  {tag}
                                </div>
                              );
                            })}
                          </div>
                          <div className="flex justify-end">
                            <div className="flex items-center gap-6 mt-2 text-slate-500 dark:text-slate-500 tracking-wide">
                              {createdAt && (
                                <div className="flex items-center">
                                  <AccessTime size={15} className="mr-1" />
                                  <time
                                    dateTime={moment(createdAt).format("YYYY-M-D")}
                                    itemProp="datepublished"
                                    className="block"
                                  >
                                    {moment(createdAt).format("YYYY.M.D")}
                                  </time>
                                </div>
                              )}
                              {updatedAt && (
                                <div className="flex items-center">
                                  <Update size={15} className="mr-1" />
                                  <time
                                    dateTime={moment(updatedAt).format("YYYY-M-D")}
                                    itemProp="modified"
                                    className="block"
                                  >
                                    {moment(updatedAt).format("YYYY.M.D")}
                                  </time>
                                </div>
                              )}
                            </div>
                          </div>
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
