import { SeoProps } from "@/@types";
import { NextSeo } from "next-seo";

const SEO = ({ title, desc, canonical }: SeoProps) => {
  return (
    <NextSeo
      title={title}
      description={desc || "This is desc"}
      canonical={process.env.NEXT_PUBLIC_SEO_CANONICAL || canonical}
    />
  );
};

export default SEO;
