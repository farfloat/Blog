import type { GetStaticProps } from "next";
import Image from "next/image";
import SEO from "@/components/SEO";
import DefaultLayout from "@/layouts/default";
import { allPosts, sortbyDate } from "@/utils/allPost";
import moment from "moment";
import { PostMetaProps } from "@/@types";
// import { Update } from "@styled-icons/material/Update";
import { AccessTime } from "@styled-icons/material/AccessTime";
import { listTags } from "@/utils/listTags";
import { listCategories } from "@/utils/listCategories";
import { useRouter } from "next/router";
import { Mixpanel } from "@/mixpanel";

const Home = ({
  posts,
}: // tags,
// categories,
{
  posts: PostMetaProps[];
  tags: string[];
  categories: string[];
}) => {
  const router = useRouter();

  const LinkToLink = (slug: string) => {
    router.push(`/post/${slug}`);
    Mixpanel.track("Link to Blog", {
      source: slug,
    });
  };

  return (
    <DefaultLayout>
      <div className="pt-12 md:pt-24">
        <SEO title="Blog" />
        <div className="px-6 md:px-4 mx-auto  md:max-w-screen-sm lg:max-w-[980px]">
          <div className="flex justify-center mt-20 mb-32 md:mb-40">
            <div className="flex">
              <div className="flex">
                <div className="mr-8 flex flex-col items-end">
                  <div className="font-inter text-[1.9rem] font-medium text-slate-800">Reo Yamashita</div>
                  <div className="font-inter text-[1.3rem] text-slate-600">Front End Engineer</div>
                </div>
                <div className="h-[70px] w-[70px] rounded-full overflow-hidden border border-slate-100">
                  <Image src="/far_float.png" height={75} width={75} alt="" />
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="mt-16 md:mt-24">
            <h1 className="font-inter text-[4rem] text-slate-800 font-bold tracking-wide">Snippets</h1>
            <div className="mt-8">
              {posts &&
                posts.map(({ title, createdAt, description, slug, tags }) => {
                  return (
                    <article
                      className="pt-8 pb-4 px-3 md:px-8 relative cursor-pointer"
                      key={slug}
                      onClick={() => LinkToLink(slug)}
                    >
                      <div className="block w-ful">
                        <h2 className="inline-block text-[1.8rem] md:text-[2rem] font-semibold text-slate-700 tracking-wide">
                          {title}
                        </h2>
                        <p className="md:pb-4 pt-4 text-slate-700 leading-8 tracking-wide text-sm md:text-base">
                          {description}
                        </p>
                        <div className="mb-2 md:mb-4 mt-8 flex flex-wrap gap-4">
                          {tags &&
                            tags.map((tag) => {
                              return (
                                <div
                                  key={tag}
                                  className="px-3 py-.5 rounded border border-sky-600 dark:border-sky-600 dark:text-sky-500 text-sky-600 text-[1.2rem]"
                                >
                                  {tag}
                                </div>
                              );
                            })}
                        </div>
                        <div className="flex justify-end">
                          <div className="flex items-center gap-6 mt-2 text-slate-500">
                            {createdAt && (
                              <div className="flex items-center">
                                <AccessTime size={15} className="mr-1" />
                                <time
                                  dateTime={moment(createdAt).format("MMM D, YYYY")}
                                  itemProp="datepublished"
                                  className="block text-slate-500 text-[1.2rem] tracking-wide"
                                >
                                  {moment(createdAt).format("MMM D, YYYY")}
                                </time>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = allPosts();
  const tags = listTags();
  const categories = listCategories();

  return {
    props: {
      posts: data.sort(sortbyDate),
      tags,
      categories,
    },
  };
};

export default Home;
