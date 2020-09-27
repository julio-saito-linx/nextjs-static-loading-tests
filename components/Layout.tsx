import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
  loading?: boolean;
};

const Layout = ({ children, title = "exemplo", loading }: Props) => {
  return (
    <div style={loading ? { pointerEvents: "none", opacity: "0.4" } : {}}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Index</a>
          </Link>{" "}
          |{" "}
          <Link href="/get-server-side-props">
            <a>get-server-side-props</a>
          </Link>{" "}
          |{" "}
          <Link href="/a-cada-cinco-segundos">
            <a>a-cada-cinco-segundos</a>
          </Link>{" "}
          |{" "}
          <Link href="/users">
            <a>Users List</a>
          </Link>{" "}
          | <a href="/api/users">Users API</a>
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>(footer)</span>
      </footer>
    </div>
  );
};

export default Layout;
