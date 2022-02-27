import "@/styles/tailwind.css";
import "@/styles/global.scss";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  useEffect(() => {
    gtmId && TagManager.initialize({ gtmId });
  }, []);

  return (
    <ThemeProvider attribute="class">
      <DefaultSeo defaultTitle="Far Float" titleTemplate="%s | Far Float" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
