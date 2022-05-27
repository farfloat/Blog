/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import CodeBlock from "@/components/Code";
import { QuoteLeft } from "@styled-icons/boxicons-solid/QuoteLeft";
import { QuoteRight } from "@styled-icons/boxicons-solid/QuoteRight";

export const MdxComponents = {
  h1: (props: any) => (
    <h2 className="text-lg md:text-xl font-semibold text-slate-700 text-opacity-95 dark:text-slate-300 pb-4 pt-5  md:py-4">
      {props.children}
    </h2>
  ),
  h2: (props: any) => (
    <h3 className="text-md md:text-lg font-semibold text-slate-700 text-opacity-95 dark:text-slate-300 pb-4 pt-5  md:py-4">
      {props.children}
    </h3>
  ),
  p: (props: any) => {
    const children = props.children;
    const child = children.props;

    if (children.type === "img") {
      const { src, alt } = child;
      return (
        <div className="flex justify-center my-4" style={{ position: "relative", width: "100%", height: 150 }}>
          <Image src={src} alt={alt} layout="fill" objectFit="contain" />
        </div>
      );
    } else {
      return (
        <p className="mb-12 md:mb-14 text-tiny md:text-[1.6rem] leading-10 md:leading-[3rem] text-slate-700 dark:text-slate-300">
          {children}
        </p>
      );
    }
  },
  pre: ({ children }: any) => {
    const child = children.props;
    const metaString = child.data && (JSON.parse(child.data) as { [key: string]: string });
    const title = metaString?.title;

    if (children.type === "code") {
      return (
        <CodeBlock
          codeString={child.children.trim()}
          language={child.className.replace("language-", "")}
          title={title || ""}
          highlight={child.highlight}
        />
      );
    } else return <>{child}</>;
  },
  ul: (props: any) => (
    <ul className="mb-12 py-6 md:py-8 px-10 md:px-12 list-disc bg-slate-100 dark:bg-slate-700 rounded-md" {...props} />
  ),
  ol: (props: any) => (
    <ol
      className="mb-12 py-6 md:py-8 px-10 md:px-12  list-decimal bg-slate-100 dark:bg-slate-700  rounded-md"
      {...props}
    />
  ),
  li: (props: any) => (
    <li
      className="text-tiny md:text-base list-inside mb-4 pl-3 last:mb-0 leading-9 text-slate-800 dark:text-slate-300"
      {...props}
    />
  ),
  em: (props: any) => <em className="font-semibold italic" {...props} />,
  strong: (props: any) => <strong className="font-semibold not-italic" {...props} />,
  blockquote: (props: any) => {
    return (
      <blockquote
        className="rounded relative text-tiny md:text-base leading-9 bg-slate-200 px-8 py-16 my-16 md:px-20 md:py-16 md:my-20 dark:bg-slate-700 dark:text-slate-300 max-w-6xl mx-auto"
        {...props}
      >
        <QuoteLeft size={25} className="absolute top-4 left-4 opacity-80 text-slate-500" />
        <QuoteRight size={25} className="absolute bottom-4 right-4 opacity-80 text-slate-500" />
        <div className="">{props.children}</div>
      </blockquote>
    );
  },
  Notice: (props: any) => {
    return (
      <div className="max-w-4xl mx-auto relative">
        <div className="bg-yellow-100 dark:bg-slate-700 pt-10 pb-8 px-8 md:px-20 text-tiny md:text-base rounded-md">
          {props.children}
        </div>
      </div>
    );
  },
};
