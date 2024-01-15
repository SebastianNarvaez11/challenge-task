import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { TableUser } from "../src/components/TableUsers";
import { IUser } from "@/interfaces";

// Define la prueba
test("TableUser", () => {
  // Define algunos usuarios de prueba
  const users: IUser[] = [
    {
      id: "1",
      name: "User 1",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/67.jpg",
      createdAt: new Date(),
    },
    {
      id: "2",
      name: "User 2",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/67.jpg",
      createdAt: new Date(),
    },
  ];

  // Renderiza el componente TableUser con los usuarios de prueba
  render(<TableUser users={users} />);

  // Verifica que el componente esté presente en el DOM
  const tableUserElement = screen.getByTestId("table-user");
  expect(tableUserElement).toBeDefined();

  // Verifica que cada usuario esté presente en el DOM
  users.forEach((user) => {
    const userImage = screen.getByAltText(`foto del usuario ${user.name}`);
    expect(userImage).toBeDefined();

    const userName = screen.getByText(user.name);
    expect(userName).toBeDefined();
  });

});
