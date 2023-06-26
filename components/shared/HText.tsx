import React from "react";

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h2 className="text-3xl font-semibold text-gray-800 font-mono">
      {children}
    </h2>
  );
};

export default HText;
