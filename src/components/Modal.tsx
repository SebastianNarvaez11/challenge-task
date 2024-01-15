"use client";

import { useAppDispatch } from "@/store/hooks";
import { addTask } from "@/store/slices/taskSlice";
import { FC, FormEvent, useState } from "react";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const Modal: FC<Props> = ({ open, setOpen }) => {
  const [task, setTask] = useState("");
  const dispatch = useAppDispatch();

  const onSubmitTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task === "") return alert("Ingrese una descripcion");

    dispatch(addTask({ description: task }));

    setTask("");
    setOpen(false);
  };
  return (
    <>
      {open ? (
        <>
          <div
            data-testid="modal"
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <form data-testid="modal-form" onSubmit={onSubmitTask}>
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Create Task</h3>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <input
                      placeholder="Task name"
                      className="w-100 h-10 border-gray-700 border rounded"
                      type="text"
                      name="task"
                      value={task}
                      onChange={(e) => setTask(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
