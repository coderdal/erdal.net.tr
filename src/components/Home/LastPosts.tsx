import Link from "next/link";
import React from "react";

const Introduction: React.FC = () => {
  return (
    <section className="mt-6">
      <h1 className="font-semibold text-lg mb-2">Last Posts</h1>
      <table className="table-auto w-full text-left text-sm border-spacing-3">
        <thead>
          <tr>
            <th className="py-1">Date</th>
            <th className="py-1">Title</th>
            <th className="py-1">Views</th>
          </tr>
        </thead>
        <tbody>
          <tr className="cursor-pointer hover:opacity-80">
            <td className="py-1"><Link href="1" className="block">28/09/2023</Link></td>
            <td className="py-1"><Link href="1" className="block">The Sliding Mr. Bones (Next Stop, Pottersville)</Link></td>
            <td className="py-1"><Link href="1" className="block">1,961</Link></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Introduction;
