import { expect, test, describe } from "vitest";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "@/interfaces"; 
import { addTask } from "@/store/slices/taskSlice";

// Describe el conjunto de pruebas para el slice 'task'
describe("task slice", () => {
  // Prueba el reducer
  test("reducer", () => {
    // Estado inicial
    const initialState = { tasks: [] as ITask[] }; // Inicializa las tareas como un array de ITask

    // Acción de prueba
    const taskToAdd: ITask = { description: "Test Task" };
    const action: PayloadAction<ITask> = addTask(taskToAdd);

    // Llama al reducer con el estado inicial y la acción
    const nextState = createSlice({
      name: "task",
      initialState,
      reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
          state.tasks = [action.payload, ...state.tasks];
        },
      },
    }).reducer(initialState, action);

    // Verifica que el estado resultante sea el esperado
    expect(nextState.tasks).toEqual([taskToAdd]);
  });
});
