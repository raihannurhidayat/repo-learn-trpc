"use client";

import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button className="w-full rounded-lg bg-violet-500 px-4 py-2">
      {pending ? "Loading ...." : "Create Post"}
    </button>
  );
};

export default SubmitButton;
