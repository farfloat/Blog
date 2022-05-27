import React, { useEffect, useRef, useState } from "react";
import Highlight, { Prism } from "prism-react-renderer";
import themeDark from "prism-react-renderer/themes/palenight";
// import { CopyToClipboard } from "react-copy-to-clipboard";
import { LinesToHighlight } from "react-mdx-prism-lighter";
import { CodeBlockProps } from "@/@types";
const HighlightClassName = " highlight-line";

const CodeBlock = ({ codeString, language = "javascript", title }: CodeBlockProps) => {
  const [value, setValues] = useState(["Copy", false]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // const CopyText = () => {
  //   setValues(["Copied", true]);
  // };

  useEffect(() => {
    timerRef.current = setTimeout(() => setValues(["Copy", false]), 5000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [value, setValues]);

  return (
    <Highlight theme={themeDark} Prism={Prism} code={codeString} language={language}>
      {({ style, tokens, getLineProps, getTokenProps }) => {
        const bgColor = style.backgroundColor as string;
        return (
          <div className="mt-8 mb-8 md:mb-10">
            {(title || language) && (
              <div className="px-4 py-1 select-none inline-block mb-1 rounded-md bg-slate-100 text-slate-700 text-sm tracking-wide dark:bg-slate-300">
                {title ? title : language}
              </div>
            )}
            <div className="relative shadow-sm rounded-md group" style={{ backgroundColor: bgColor }}>
              {/* <CopyToClipboard text={codeString} onCopy={CopyText}>
                <div className="absolute right-4 top-2 cursor-pointer rounded-lg  group-hover:text-slate-200 text-slate-400 text-tiny md:text-base py-1 px-2 transition duration-300 ease-in-out font-source">
                  {value[0]}
                </div>
              </CopyToClipboard> */}
              <pre className="px-0 pt-8 pb-6 overflow-auto scrolls">
                <div className="text-tiny md:text-base md:tracking-tight text-slate-900 px-8 float-left block min-w-full font-source font-light">
                  {tokens.map((line, index) => {
                    const lineProps = getLineProps({ line, key: index });

                    if (LinesToHighlight(line)) {
                      lineProps.className += HighlightClassName;
                    }

                    return (
                      <div {...lineProps} key={index}>
                        {line.map((token, key) => {
                          const tokenProps = getTokenProps({
                            token,
                            key: key,
                          });
                          return <span {...tokenProps} key={key} className="!not-italic" />;
                        })}
                      </div>
                    );
                  })}
                </div>
              </pre>
            </div>
          </div>
        );
      }}
    </Highlight>
  );
};

export default CodeBlock;
