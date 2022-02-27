import { Footer, Header } from "@/components";
import React from "react";

const PostLayout = ({ children }: { children: React.ReactChild }) => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-slate-800 bg-slate-50">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default PostLayout;
