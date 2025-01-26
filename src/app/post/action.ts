"use server";

import { revalidatePath } from "next/cache";
import { api } from "~/trpc/server";

export const createPost = async (formData: FormData) => {
  const data = Object.fromEntries(formData);

  await api.postCustom.create({
    title: data.title as string,
    content: data.content as string,
  });

  // invalidate cache di Trpc server

  // incalidate di sisi sever
  revalidatePath("/post");
};
