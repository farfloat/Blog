import DefaultLayout from "@/layouts/default";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <DefaultLayout>
      <div className="flex items-start justify-center flex-col pt-12 px-8">
        <div className="">ページが見つかりません</div>
        <Link href="/">
          <a className="underline">ホームへ</a>
        </Link>
      </div>
    </DefaultLayout>
  );
};

export default NotFoundPage;
