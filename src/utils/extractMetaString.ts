/* eslint-disable @typescript-eslint/no-explicit-any */
import { visit } from "unist-util-visit";

interface MetaProps {
  [key: string]: string;
}

export const extractMetaString = () => {
  return (tree: any) => {
    visit(tree, "element", (node) => {
      if (node.type === "element" && node.tagName === "code" && node.data) {
        const meta = node.data.meta.split(/\s/g) as string[];

        const metaReduce = meta.reduce((acc: MetaProps, cur) => {
          const [name, value] = cur.split("=");
          return { ...acc, [name]: value };
        }, {});

        node.properties = {
          ...node.properties,
          data: JSON.stringify(metaReduce),
        };
      }
    });
  };
};
