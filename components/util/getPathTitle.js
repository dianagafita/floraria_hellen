import Link from "next/link";

export function TitleByPath({ paths }) {
  return (
    <span className="uppercase font-[200] flex bg-[#F0F0F0] bg-opacity-70  p-3 text-[10px] md:text-[11.5px] text-black-300/50">
      <Link href="/">ACASA</Link>
      {paths.map((pa) => (
        <div key={pa.title} className="flex items-center whitespace-nowrap">
          <span className="ml-1 mr-2">/</span>
          <Link href={pa.href} className={pa.style}>
            {pa.title}
          </Link>
        </div>
      ))}
    </span>
  );
}
