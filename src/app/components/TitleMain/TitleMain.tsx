import React from "react";
import clsx from "clsx";
const TitleMain = ({
  title,
  className,
}: {
  title: string | undefined;
  className?: string;
}) => {
  return (
    <h2
      className={clsx(
        "text-slate-800 text-center my-5 font-semibold text-[1.9rem] motion-preset-slide-right motion-duration-500",
        className
      )}
    >
      {title}
    </h2>
  );
};

export default TitleMain;
