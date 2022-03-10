import { Footer, Header } from "@/components";

const DefaultLayout = ({ children }: { children: React.ReactChild }) => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-slate-800 bg-white">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
