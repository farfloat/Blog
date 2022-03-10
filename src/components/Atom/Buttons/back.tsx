import Link from "next/link";

interface BackButtonProps {
  href: string;
  text: string;
}

export const BackToButton = ({ href, text }: BackButtonProps) => {
  return (
    <Link href={`/${href}`}>
      <a className="no-underline text-inherit">{text}</a>
    </Link>
  );
};
