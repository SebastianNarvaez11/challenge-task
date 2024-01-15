import { ITask } from "@/interfaces";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ITaskState {
  tasks: ITask[];
}
const initialState: ITaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks = [action.payload, ...state.tasks];
    },
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
