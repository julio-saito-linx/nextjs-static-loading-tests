import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "./Nav";

type Props = {
  children?: ReactNode;
  title?: string;
  loading?: boolean;
};

const Layout = ({ children, title = "exemplo", loading }: Props) => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div style={loading ? { pointerEvents: "none", opacity: "0.4" } : {}}>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div className="max-w-screen-xl mx-auto">
          <div className="relative z-10 pb-8 bg-white">
            <svg
              className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <header>
                <Nav />
              </header>
            </div>

            <main className="max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
