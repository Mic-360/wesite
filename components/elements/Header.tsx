//@ts-nocheck
"use client";

import { UrlPaths } from "@/lib/constants";
import type { NextComponentType, NextPageContext } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatedTitle } from "./Animates";

interface Props {}

const Header: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const route = usePathname();
  const [isRouted, setIsRouted] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsRouted(route);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [route]);

  return (
    <header
      id="view"
      className="absolute z-10 top-0 left-0 overflow-hidden bg-transparent"
    >
      <div className="uppercase cursor-default justify-center items-center">
        <AnimatedTitle
          text="Twinverse"
          className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] tracking-tightest font-archivo font-semibold text-plume pl-3.5"
        />
      </div>
      <div className="w-screen px-6 sm:px-10 md:px-12 lg:px-14 xl:px-16 flex justify-between items-center text-plume">
        {UrlPaths.map(({ name, path }) => (
          <Link
            key={name}
            href={path}
            className="font-medium text-xs sm:text-lg hover:text-plume transition-all duration-200 ease-in-out flex gap-x-2 items-center cursor-pointer font-archivo tracking-tighter uppercase"
          >
            {isRouted === path ? (
              <div className="w-2 h-2 border-[0.01rem] bg-plumelight rounded-full"></div>
            ) : (
              <div className="w-2 h-2 bg-transparent rounded-full"></div>
            )}
            <AnimatedTitle text={name} delay={3} />
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;

export const StaticHeader: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const route = usePathname();

  return (
    <div className="h-full overflow-x-hidden bg-transparent">
      <div className="h-full flex items-center justify-center">
        <h1 className="text-[11rem] font-medium tracking-widest font-archivo text-plume uppercase drop-shadow-xl">
          Twinverse
        </h1>
      </div>

      <div className="w-screen flex -mt-6 sm:px-6 md:px-8 lg:px-10 xl:px-14 justify-between items-center text-black">
        {UrlPaths.map(({ name, path }) => (
          <Link
            key={name}
            href={path}
            className="text-black font-medium text-sm hover:text-plume transition duration-200 ease-in-out uppercase flex gap-x-2 items-center cursor-pointer font-arimo tracking-tighter drop-shadow-xl"
          >
            {route === path ? (
              <div className="w-4 h-4 border-[0.01rem] bg-plumelight rounded-full"></div>
            ) : (
              <div className="w-4 h-4 bg-transparent rounded-full"></div>
            )}
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};
