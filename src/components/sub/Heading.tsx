import React from "react";

interface HeadingProps {
  text: string;
}

const Heading = ({ text }: HeadingProps): React.ReactElement => {
  return (
    <h1 className="mb-14 self-start font-bebas text-5xl font-bold text-gray-600 transition-colors dark:text-zinc-300 sm:text-2xl">
      {text}
    </h1>
  );
};

export default Heading;
