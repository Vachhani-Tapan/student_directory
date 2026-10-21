
import React from "react";
import Link from "next/link";
import { department } from "@/data/department";
import { studentData } from "@/data/student";

function Department() {
  return (
    <div className="min-h-screen bg-[#f8f7fd] px-6 py-10 md:px-20 lg:px-40">

      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Departments
          </h1>
          <p className="mt-2 text-gray-500">
            Explore academic faculties, programs, and enrolled students.
          </p>
        </div>

        <p className="text-sm text-slate-500">
          <span className="text-blue-600">●</span>{" "}
          {department.length} Active Academic Faculties
        </p>
      </div>

      <hr className="my-7 border-gray-300" />

      <div className="overflow-hidden rounded-md border border-slate-300 bg-white">

        {department.map((dept) => {
          const studentCount = studentData.filter(
            (stud) => stud.branch === dept.name
          ).length;

          return (
            <div
              key={dept.id}
              className="border-b border-slate-300 p-8 last:border-b-0"
            >
              <div className="flex items-center justify-between gap-5">

                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    {dept.name}
                  </h2>

                  <p className="mt-3 text-gray-600">
                    {dept.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-6 text-sm text-slate-500">
                    <p>
                      {dept.specializations.length} Specializations
                    </p>

                    <p>
                      {studentCount} Enrolled Students
                    </p>
                  </div>
                </div>

                <Link
                  href={`/departments/${dept.slug}`}
                  className="shrink-0 font-medium text-blue-600"
                >
                  View students →
                </Link>

              </div>
            </div>
          );
        })}

      </div>

      <div className="mt-5 flex justify-between text-xs text-slate-500">
        <p>Curriculum Year 2024–2025</p>
        <p>Campus Directory</p>
      </div>

    </div>
  );
}

export default Department;
