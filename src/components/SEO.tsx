import { SeoProps } from "@/@types";
import { NextSeo } from "next-seo";

const SEO = ({ title, description, canonical }: SeoProps) => {
  return (
    <NextSeo
      title={title}
      description={
        description ||
        "主にReactJSを使って作ったもの、学んだことを書き留めています"
      }
    />
  );
};

export default SEO;
