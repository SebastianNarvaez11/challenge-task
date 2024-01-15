"use client";

import { useAppSelector } from "@/store/hooks";

export const Table = () => {
  const { tasks } = useAppSelector((state) => state.task);

  return (
    <div className="flex items-center justify-center">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-xl">
          <thead>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">Tasks</th>
            </tr>
          </thead>
          <tbody className="text-blue-gray-900">
            {tasks.map((task, index) => (
              <tr
                key={task.description + index}
                className="border-b border-blue-gray-200"
              >
                <td className="py-3 px-4">{task.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
