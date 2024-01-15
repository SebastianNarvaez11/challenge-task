"use client";

import React, { useState } from "react";
import { Modal } from ".";

export const ModalContainer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-400 p-2 rounded w-40 hover:bg-blue-600"
      >
        New Task
      </button>
      <Modal open={open} setOpen={setOpen} />
    </div>
  );
};
