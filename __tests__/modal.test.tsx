
import { expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "../src/components/Modal"; 
import { Provider } from "react-redux";
import { store } from "@/store/store";

test("Modal", () => {
  // Renderiza el componente Modal
  render(
    <Provider store={store}>
      <Modal open={true} setOpen={() => {}} />
    </Provider>
  );

  // Verifica que el componente esté presente en el DOM
  const modalElement = screen.getByTestId("modal");
  expect(modalElement).toBeDefined();

  // Simula la entrada de datos en el campo de texto
  const inputElement = screen.getByPlaceholderText("Task name");
  fireEvent.change(inputElement, { target: { value: "Nueva tarea" } });

  // Simula el envío del formulario
  const formElement = screen.getByTestId("modal-form");
  fireEvent.submit(formElement);
});
