"use client";

type MarqueeProps = {
  items: string[];
};

export default function Marquee({ items }: MarqueeProps) {
  const repeatedItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden whitespace-nowrap w-full">
      {/* Left fade shadow */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />

      {/* Right fade shadow */}
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

      <div className="inline-flex animate-marquee">
        {repeatedItems.map((item, index) => (
          <span key={index} className="navbar-marquee mr-2">
            {item}
            {index < repeatedItems.length - 1 && <span className="mx-1">,</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

