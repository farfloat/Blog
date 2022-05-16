import "@/styles/tailwind.css";
import "@/styles/global.scss";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div id="menu-portal"></div>
      <DefaultSeo defaultTitle="Far Float" titleTemplate="%s | Far Float" />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
