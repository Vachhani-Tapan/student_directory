
import Link from "next/link";
import { notFound } from "next/navigation";
import { department } from "@/data/department";
import { studentData } from "@/data/student";

export const instant = false;

export default async function DepartmentDetails({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    // Find the department using URL
    const selectedDepartment = department.find(
        (dept) => dept.slug === id
    );

    if (!selectedDepartment) {
        notFound();
    }

    // Get all students from this department
    const enrolledStudents = studentData.filter(
        (student) => student.branch === selectedDepartment.name
    );

    return (
        <div className="min-h-screen bg-[#f8f7fd] px-6 py-8 md:px-20 lg:px-40">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm">
                <Link href="/departments" className="text-gray-500 hover:text-blue-600">
                    Departments
                </Link>

                <span className="text-gray-400">/</span>

                <span className="font-medium text-slate-900">
                    {selectedDepartment.name}
                </span>
            </div>

            {/* Back Link */}
            <Link
                href="/departments"
                className="mt-5 inline-block text-sm font-medium text-blue-600 hover:underline"
            >
                ← Back to Departments
            </Link>

            {/* Department Information */}
            <div className="mt-6 rounded-md border border-gray-300 bg-white p-6">

                <div className="flex items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">
                            {selectedDepartment.name}
                        </h1>

                        <p className="mt-3 text-gray-500">
                            {selectedDepartment.description}
                        </p>
                    </div>

                    <span className="rounded border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-600">
                        {selectedDepartment.id}
                    </span>
                </div>

                <hr className="my-6 border-gray-200" />

                <div className="flex flex-wrap gap-10">

                    <div>
                        <p className="text-sm text-gray-500">
                            Total Specializations
                        </p>
                        <p className="mt-1 text-2xl font-bold text-slate-900">
                            {selectedDepartment.specializations.length}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                            Enrolled Students
                        </p>
                        <p className="mt-1 text-2xl font-bold text-blue-600">
                            {enrolledStudents.length}
                        </p>
                    </div>

                </div>
            </div>

            {/* Specializations */}
            <div className="mt-10">
                <h2 className="text-xl font-semibold text-slate-900">
                    Specializations
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Explore the academic specializations offered by this department.
                </p>

                <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">

                    {selectedDepartment.specializations.map((spec) => {

                        const specStudents = enrolledStudents.filter(
                            (student) => student.specialization === spec.slug
                        );

                        return (
                            <div
                                key={spec.id}
                                className="rounded-md border border-gray-200 bg-white p-5"
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-slate-900">
                                        {spec.name}
                                    </h3>

                                    <span className="text-xs text-gray-500">
                                        {spec.id}
                                    </span>
                                </div>

                                <p className="mt-3 text-sm leading-6 text-gray-500">
                                    {spec.description}
                                </p>

                                <div className="mt-5 flex items-center justify-between">
                                    <p className="text-sm text-gray-500">
                                        {specStudents.length} Students
                                    </p>

                                    <Link
                                        href={`/departments/${selectedDepartment.slug}/${spec.slug}`}
                                        className="text-sm font-medium text-blue-600 hover:underline"
                                    >
                                        View Specialization →
                                    </Link>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>

            {/* Students */}
            <div className="mt-10">
                <h2 className="text-xl font-semibold text-slate-900">
                    Enrolled Students ({enrolledStudents.length})
                </h2>

                <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">

                    {enrolledStudents.map((student) => (
                        <div
                            key={student.stu}
                            className="rounded-md border border-gray-200 bg-white p-5"
                        >
                            <div className="flex items-center gap-3">

                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 font-bold text-blue-600">
                                    {student.initals}
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-900">
                                        {student.name}
                                    </h3>

                                    <p className="text-xs text-gray-500">
                                        STU-{student.stu}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 flex items-center justify-between">
                                <span className="text-sm text-gray-500">
                                    {student.year}
                                </span>

                                <Link
                                    href={`/students/${student.stu}`}
                                    className="text-sm font-medium text-blue-600 hover:underline"
                                >
                                    View Profile →
                                </Link>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
}
