import React from "react";
import { Link } from "react-router-dom";

export const Breadcrumb = ({ title, links }) => {
  return (
    <div>
      <div className="flex h-28 items-center bg-[#F6F5FF] md:h-36 xl:h-40">
        <div className="pl-4 sm:container sm:pl-0">
          <p className="font-josefin text-3xl font-bold md:text-4xl">{title}</p>
          <div className="flex gap-4 font-lato text-[10px] md:text-base">
            {links.map((el, index) => {
              return (
                <Link
                  className={`${
                    index + 1 === links.length ? "text-customPink" : ""
                  }`}
                  to={el.url}
                >
                  {el.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
