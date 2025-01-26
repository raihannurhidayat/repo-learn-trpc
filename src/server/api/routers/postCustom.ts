import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const postCustomRouter = createTRPCRouter({
  getData: publicProcedure.query(async ({ ctx }) => {
    const data = await ctx.db.postModel.findMany();

    return {
      result: data,
    };
  }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { title, content } = input;

      await ctx.db.postModel.create({
        data: {
          title,
          content,
        },
      });

      return {
        status: "success",
      };
    }),
});
