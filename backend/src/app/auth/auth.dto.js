import * as z from "zod";

const User = z.object({
    username:z.string(),
    email:z.string(),
    password:z.string().min(5).max(16)
})

