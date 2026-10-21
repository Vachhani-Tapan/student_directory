import Link from "next/link";
import { notFound } from "next/navigation";
import { department } from "@/data/department";
import { studentData } from "@/data/student";

export const instant = false;

export default async function SpecializationPage({
    params,
}: {
    params: Promise<{ id: string; spec: string }>;
}) {
    const { id, spec } = await params;

    // Find department
    const selectedDepartment = department.find(
        (dept) => dept.slug === id
    );

    if (!selectedDepartment) {
        notFound();
    }

    // Find specialization
    const specialization = selectedDepartment.specializations.find(
        (item) => item.slug === spec
    );

    if (!specialization) {
        notFound();
    }

    // Find enrolled students
    const enrolledStudents = studentData.filter(
        (student) =>
            student.branch === selectedDepartment.name &&
            student.specialization === specialization.slug
    );

    return (
        <div className="min-h-screen bg-[#f8f7fd] px-20 py-8">
            <Link href="/departments" className="text-blue-600">
                ← Back to Departments
            </Link>

            <div className="mt-6 border bg-white p-6">
                <h1 className="text-3xl font-bold">
                    {specialization.name}
                </h1>

                <p className="mt-3 text-gray-500">
                    {specialization.description}
                </p>

                <p className="mt-4">
                    Department: {selectedDepartment.name}
                </p>

                <p className="mt-2">
                    Students Enrolled: {enrolledStudents.length}
                </p>
            </div>

            <h2 className="mt-8 text-xl font-semibold">
                Students in this Specialization
            </h2>

            <div className="mt-4 grid grid-cols-2 gap-4">
                {enrolledStudents.map((student) => (
                    <div
                        key={student.stu}
                        className="border bg-white p-4"
                    >
                        <h3 className="font-semibold">
                            {student.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                            {student.branch}
                        </p>

                        <Link
                            href={`/students/${student.stu}`}
                            className="mt-3 inline-block text-blue-600"
                        >
                            View Profile →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}