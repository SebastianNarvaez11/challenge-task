"use client";

import { useGetUsersQuery } from "@/store/apis";
import { TableUser } from ".";

export const ListUsers = () => {
  const { data, isLoading } = useGetUsersQuery();

  return (
    <div>
      {isLoading ? (
        <h1 className="text-5xl">Cargando usuarios...</h1>
      ) : (
        <TableUser users={data || []} />
      )}
    </div>
  );
};
