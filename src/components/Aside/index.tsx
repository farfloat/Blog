import Link from "next/link";

const Aside = ({ variety }: { variety: string[] }) => {
  return (
    <div className="flex-1">
      <div className="pr-16">
        <div className="flex flex-col gap-y-4">
          {variety &&
            variety.map((item) => {
              return (
                <Link href={`/${item}`} key={item}>
                  <a>
                    <div className="inline-block border border-slate-300 bg-slate-100 rounded-full px-3 py-1 leading-none">
                      <div className="text-slate-700 text-variety inline-block">{item}</div>
                    </div>
                  </a>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Aside;
