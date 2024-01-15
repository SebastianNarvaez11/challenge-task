"use client";

import { IUser } from "@/interfaces";
import Image from "next/image";
import { FC } from "react";

interface Props {
  users: IUser[];
}

export const TableUser: FC<Props> = ({ users }) => {
  return (
    <div data-testid="table-user" className="flex items-center justify-center">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-xl">
          <thead>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">Image</th>
              <th className="py-3 px-4 text-left">Name</th>
            </tr>
          </thead>
          <tbody className="text-blue-gray-900">
            {users.map((user) => (
              <tr key={user.id} className="border-b border-blue-gray-200">
                <td className="py-3 px-4">
                  <Image
                    alt={`foto del usuario ${user.name}`}
                    src={user.avatar}
                    height={100}
                    width={100}
                  />
                </td>
                <td className="py-3 px-4">{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
