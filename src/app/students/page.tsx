"use client"

import { init } from 'next/dist/compiled/webpack/webpack'
import React from 'react'
import Link from 'next/link'
import { studentData } from '../../data/student'


function page() {

    const [page, setPage] = React.useState(0);

    const [search, setSearch] = React.useState("");

    const [dept, setDept] = React.useState("All Departments");

    const filterData = studentData.filter((student) => {

        const searchName = student.name.toLowerCase().includes(search.toLowerCase());

        const searchDept = dept === "All Departments" || student.branch === dept;

        return searchName && searchDept;
    });

    return (
        <div className="min-h-screen bg-[#f8f7fd] px-20 py-8">

            <div className="mt-2 flex flex-col gap-1">
                <h1 className="text-3xl font-bold text-slate-900">
                    Students
                </h1>
                <p className="text-gray-500">
                    Browse students and view their profiles.
                </p>
            </div>

            <div className="mt-6 rounded-md border border-gray-300 bg-white p-4">
                <div className="flex items-center justify-between gap-4">

                    <div className="rounded-md border border-gray-300text-sm text-gray-500">
                        <input type="text" placeholder="Search Students" onChange={(e) => setSearch(e.target.value)} className='w-70 p-2' />
                    </div>

                    <div className="flex items-center justify-between gap-4">
                        <p className="text-sm font-medium text-gray-600">
                            Departments
                        </p>

                        <select
                            name="dept"
                            id="dept"
                            className="rounded-md border border-gray-300 bg-white p-2.5 text-sm text-slate-700 outline-none focus:border-blue-500"
                            value={dept}
                            onChange={(e) => { setDept(e.target.value) }}
                        >
                            <option value="All Departments">All Departments</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Electrical Engineering">Electrical Engineering</option>
                            <option value="Mechanical Engineering">Mechanical Engineering</option>
                            <option value="Civil Engineering">Civil Engineering</option>
                            <option value="Information Technology">Information Technology</option>
                            <option value="Electronics Engineering">Electronics Engineering</option>
                        </select>
                    </div>

                </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

                {filterData.slice(page, page + 8).map((student) => (
                    <div
                        key={student.stu}
                        className="rounded-md border border-gray-300 bg-white p-5 shadow-sm transition-all duration-200 hover:border-blue-300 hover:shadow-md"
                    >

                        <div className="flex items-start justify-between">

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 font-semibold text-blue-700">
                                {student.initals}
                            </div>

                            <span className="rounded-sm border border-gray-300 bg-slate-100 px-2 py-1 font-mono text-xs font-semibold text-gray-500">
                                STU-{student.stu}
                            </span>

                        </div>

                        <h2 className="mt-4 text-lg font-semibold text-slate-900">
                            {student.name}
                        </h2>

                        <div className="mt-2 flex items-center gap-3">

                            <span className="rounded-sm border border-blue-200 bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600">
                                {student.branch}
                            </span>

                            <p className="text-sm text-gray-500">
                                {student.year}
                            </p>

                        </div>

                        <hr className="my-5 border-gray-200" />

                        <Link
                            href={`/students/${student.stu}`}
                            className="text-blue-600 hover:underline"
                        >
                            View profile →
                        </Link>

                    </div>
                ))}

            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
                <button
                    disabled={page === 0}
                    onClick={() => setPage(page - 8)}
                    className="px-5 py-2 rounded-md border border-gray-300 bg-white text-gray-700 font-medium shadow-sm transition-all duration-200 hover:bg-gray-100 hover:border-blue-400 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white"
                >
                    Previous
                </button>

                <button
                    disabled={page + 8 >= studentData.length}
                    onClick={() => setPage(page + 8)}
                    className="px-5 py-2 rounded-md bg-blue-600 text-white font-medium shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    Next
                </button>
            </div>

        </div>
    );
}

export default page