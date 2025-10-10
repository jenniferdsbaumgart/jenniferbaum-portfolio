import React from "react";

interface HeadingProps {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  id?: string;
}

const Heading = ({ text, level = 2, id }: HeadingProps): React.ReactElement => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  // Generate ID from text if not provided
  const headingId = id || `${text.toLowerCase().replace(/\s+/g, "-")}-heading`;

  return (
    <Tag
      id={headingId}
      className="font-bebas text-gray-600 dark:text-zinc-300 mb-14 self-start text-5xl font-bold transition-colors sm:text-2xl"
    >
      {text}
    </Tag>
  );
};

export default Heading;
