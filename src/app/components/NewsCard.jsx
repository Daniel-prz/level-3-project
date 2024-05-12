import Link from "next/link";

export default function NewsCard({ article }) {
  return (
    <>
      <div className="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] h-65 w-29 max-w-80 rounded-lg overflow-hidden mx-auto font-[sans-serif] ">
        <img src={article.image} className="w-full" />
        <div className="px-4 pb-4 pt-1">
          <h2 className="text-[#333] text-xl font-bold pb-1">
            {article.source.name}
          </h2>
          <h3 className="text-[#333] text-l font-bold">{article.title}</h3>
          <p className="mt-4 text-sm text-gray-500 truncate h-12 text-wrap">
            {article.description}
          </p>
          <Link target="blank" href={article.url}>
            <button
              type="button"
              className="px-6 py-2.5 mt-6 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
            >
              View
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
