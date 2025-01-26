import React from "react";
import { createPost } from "./action";
import { api } from "~/trpc/server";
import SubmitButton from "~/components/SubmitButton";
import Post from "./_components/Post";

const PostPage = async () => {
  return (
    <div className="relative px-4 py-12">
      <h1 className="text-center text-4xl font-semibold tracking-wide">
        Create Post Card
      </h1>
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto my-12 max-w-xl rounded-lg bg-sky-500/20">
          <form action={createPost} className="space-y-2 px-4 py-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-xl">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Enter title post..."
                className="rounded-l p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="content" className="text-xl">
                Content
              </label>
              <textarea
                name="content"
                id="content"
                placeholder="Enter content post..."
                className="rounded-l p-2"
              ></textarea>
            </div>

            <SubmitButton />
          </form>
        </div>
      </div>

      {/* <div className="flex flex-col gap-4">
        {dataPost.result.map((item, index) => (
          <h1 key={item.id} className="text-2xl font-semibold">
            {item.title}
          </h1>
        ))}
      </div> */}
      <Post />
    </div>
  );
};

export default PostPage;
