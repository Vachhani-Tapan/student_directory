export const instant = false;

import Link from "next/link";
import { notFound } from "next/navigation";
import { studentData } from "@/data/student";


export default async function StudentProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const student = studentData.find(
    (stud) => stud.stu === id
  );

  if (!student) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f8f7fd] px-6 py-8">

      <div className="mx-auto max-w-4xl">

        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-sm">
          <Link
            href="/students"
            className="text-slate-500 hover:text-blue-600"
          >
            Students
          </Link>

          <span className="text-gray-300">/</span>

          <span className="font-semibold text-slate-900">
            {student.name}
          </span>
        </div>

        {/* Back Link */}
        <Link
          href="/students"
          className="mt-3 inline-block text-sm font-medium text-slate-500 hover:text-blue-600"
        >
          ← Back to students
        </Link>

        {/* Profile Card */}
        <div className="mt-6 rounded-md border border-slate-200 bg-white p-8">

          {/* Student Header */}
          <div className="flex items-center gap-5">

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-xl font-bold text-blue-700">
              {student.initals}
            </div>

            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                {student.name}
              </h1>

              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-xs font-medium text-slate-600">
                  STU-{student.stu}
                </span>

                <span className="rounded border border-green-200 bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                  Active Student
                </span>
              </div>
            </div>

          </div>

          <hr className="my-8 border-slate-200" />

          {/* Student Information */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Department
              </p>
              <p className="mt-1 font-medium text-slate-900">
                {student.branch}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Study Year
              </p>
              <p className="mt-1 font-medium text-slate-900">
                {student.year}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Email
              </p>
              <a
                href={`mailto:${student.email}`}
                className="mt-1 block break-all font-medium text-blue-600"
              >
                {student.email}
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Enrolled
              </p>
              <p className="mt-1 font-medium text-slate-900">
                {student.enrolled}
              </p>
            </div>

          </div>

          <hr className="my-8 border-slate-200" />

          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              About
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              {student.about}
            </p>
          </div>

          <hr className="my-8 border-slate-200" />

          {/* Academic Details */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Academic Details
            </h2>

            <div className="mt-5 flex justify-between border-b border-gray-200 py-3">
              <span className="text-sm text-slate-500">
                Department
              </span>

              <span className="text-sm font-medium text-slate-900">
                {student.branch}
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-200 py-3">
              <span className="text-sm text-slate-500">
                Current Academic Standing
              </span>

              <span className="text-sm font-medium text-slate-900">
                {student.year}
              </span>
            </div>

            {/* Enrolled Subjects */}
            <h3 className="mt-6 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Enrolled Subjects
            </h3>

            <div className="mt-2 overflow-hidden rounded border border-slate-200">

              {student.subjects.map((subject) => (
                <div
                  key={subject.code}
                  className="flex items-center justify-between gap-4 border-b border-slate-200 bg-[#f8f7fd] px-4 py-3 last:border-b-0"
                >
                  <p className="text-sm font-medium text-slate-900">
                    {subject.code}: {subject.name}
                  </p>

                  <p className="shrink-0 text-xs font-medium text-slate-500">
                    {subject.credits} Credits
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="mt-5 flex flex-wrap justify-between gap-3 text-xs text-slate-500">
          <p>Campus Directory — Student Record</p>
          <p>Student ID: {student.stu}</p>
        </div>

      </div>
    </div>
  );
}
