/** @format */

import React, { FC } from "react";

type Props = {
  text: string;
  onClick: () => void;
};

const ButtonDefault: FC<Props> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary rounded-lg px-4 py-2 text-white w-fit cursor-pointer hover:shadow-sm hover:shadow-secondary"
    >
      {text}
    </button>
  );
};

export default ButtonDefault;
