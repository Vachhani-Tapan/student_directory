import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="min-h-screen bg-[#f8f7fd] flex flex-col items-center justify-center px-6 text-center">

      <div className="text-blue-600 text-3xl font-bold">
        <p>404 - ROUTE NOT FOUND</p>
      </div>

      <div className="mt-5">
        <p className="text-2xl font-semibold text-gray-800">
          Student or Department not found
        </p>
      </div>

      <div className="mt-3 max-w-lg">
        <p className="text-gray-500 text-sm leading-6">
          The requested directory entry or path could not be located.
          It may have moved or the identifier might be invalid.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-8">

        <Link
          href="/students"
          className="bg-blue-600 text-white px-5 py-2.5 rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          Return to the Student Directory
        </Link>

        <Link
          href="/departments"
          className="border border-gray-300 bg-white text-gray-700 px-5 py-2.5 rounded-md font-medium hover:bg-gray-100 transition-colors"
        >
          Return to the Department Directory
        </Link>

      </div>

    </div>
  );
}

export default NotFound;