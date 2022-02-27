import { Language } from "prism-react-renderer";

export type postIdProps = {
  slug: string;
};

export type frontmatterProps = {
  title: string;
  createdAt: string;
  updatedAt: string;
  category: string;
  tags: string[];
  description: string;
};

export type PostMetaProps = postIdProps & frontmatterProps;

export type PostProps = {
  slug: string;
  content: string;
  frontmatter: frontmatterProps;
};

export type SeoProps = {
  title?: string;
  description?: string;
  canonical?: string;
};

export type CodeBlockProps = {
  codeString: string;
  language?: Language;
  title?: string;
  highlight?: string;
};
