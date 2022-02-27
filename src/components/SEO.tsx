import { SeoProps } from "@/@types";
import { NextSeo } from "next-seo";

const SEO = ({ title, description, canonical }: SeoProps) => {
  const url = process.env.NEXT_PUBLIC_SITE_URL || "";
  const logoUrl = process.env.NEXT_PUBLIC_DELIVERY_URL || "";

  return (
    <NextSeo
      title={title}
      description={
        description ||
        "主にReactJSを使って作ったもの、学んだことを書き留めています"
      }
      openGraph={{
        type: "website",
        url,
        title,
        description,
        site_name: "FarFloatのブログ",
        images: [
          {
            url: `${logoUrl}/Float.png`,
            width: 800,
            height: 600,
            alt: "Far Float Logo",
            type: "image/png",
          },
        ],
      }}
      twitter={{
        handle: "@farfloat",
        cardType: "summary_large_image",
      }}
    />
  );
};

export default SEO;
