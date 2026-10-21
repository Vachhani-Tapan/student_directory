"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path || pathname.startsWith(path + "/");
    };

    return (
        <nav className="border-b border-gray-200 bg-white py-4">
            <div className="flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2 pl-20">
                    <img
                        src="/campus-direct.svg"
                        alt="Campus Logo"
                        width={55}
                    />
                    <p className="text-lg font-semibold text-slate-900">
                        Campus Directory
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex items-center gap-8">

                    <Link
                        href="/students"
                        className={
                            isActive("/students")
                                ? "font-medium text-blue-600"
                                : "text-slate-600"
                        }
                    >
                        Students
                    </Link>

                    <Link
                        href="/departments"
                        className={
                            isActive("/departments")
                                ? "font-medium text-blue-600"
                                : "text-slate-600"
                        }
                    >
                        Departments
                    </Link>

                    <Link
                        href="/about"
                        className={
                            isActive("/about")
                                ? "font-medium text-blue-600"
                                : "text-slate-600"
                        }
                    >
                        About
                    </Link>

                </div>

                {/* Right Side */}
                <div className="pr-20">
                    <p className="text-sm text-slate-500">
                        Frontend Practice
                    </p>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;