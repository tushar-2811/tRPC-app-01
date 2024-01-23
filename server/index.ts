import { publicProcedure, router } from './trpc';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import {z} from 'zod'

const todoInputType = z.object({
    title : z.string(),
    description : z.string()
})

const appRouter = router({
    createTodo : publicProcedure
    .input(todoInputType)
    .mutation(async(opts) => {
        const title = opts.input.title;
        const description = opts.input.description;

        // db stuff
        console.log(title,description);

        return {
            id : "1"
        }

    })
});

const server = createHTTPServer({
    router: appRouter,
  });
   
server.listen(3000);


export type AppRouter = typeof appRouter;