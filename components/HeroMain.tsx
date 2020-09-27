import React from "react";

interface Props {
  title: string;
  description: string;
  timeOnServer: string;
}

export default function HeroMain({ timeOnServer, title, description }: Props) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
        {title}
      </h2>
      <p className="mt-3 text-base text-gray-600">{description}</p>
      <p className="my-6 text-base text-gray-700">
        Server Time: {timeOnServer}
      </p>
      <div className="flex justify-center my-8">
        <div className="rounded-md shadow">
          <button
            type="button"
            className="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10"
            onClick={() => {
              document.location.reload();
            }}
          >
            Reload
          </button>
        </div>
      </div>
    </div>
  );
}
