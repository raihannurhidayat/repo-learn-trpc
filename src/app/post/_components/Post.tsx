"use client";

import React from "react";
import { api } from "~/trpc/react";

const Post = () => {
  const [dataPost] = api.postCustom.getData.useSuspenseQuery();

  return (
    <div className="flex flex-col gap-4">
      {dataPost?.result.map((item, index) => (
        <h1 key={item.id} className="text-2xl font-semibold">
          {item.title}
        </h1>
      ))}
    </div>
  );
};

export default Post;
