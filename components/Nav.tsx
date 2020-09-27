import Link from "next/link";

const links = [
  { href: "https://github.com/vercel/next.js", label: "GitHub" },
  { href: "https://nextjs.org/docs", label: "Docs" },
];

export default function Nav() {
  return (
    <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
      <div className="flex items-center">
        <div className="flex items-center justify-between w-full md:w-auto">
          <a href="#" aria-label="Home">
            <img
              className="w-auto h-8 sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
              alt="Logo"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col flex-wrap flex-grow mx-8 divide-y-2 md:space-x-10 md: md:divide-y-0 md:flex-row md:ml-10 md:pr-4">
        <Link href="/">
          <a className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900">
            Home: Static
          </a>
        </Link>
        <Link href="/static-revalidate">
          <a className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900">
            Static - Revalidate every 5 seconds
          </a>
        </Link>
        <Link href="/get-server-side-props">
          <a className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900">
            Server Side Props
          </a>
        </Link>
      </div>
    </nav>
  );
}
