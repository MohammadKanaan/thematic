import z from "zod";

export const loginSchema = z.object({
  auth_token: z.string(),
});

// only a snapshot of what the server returns
export const userSchema = z.object({
  email: z.string(),
  city: z.string(),
  country: z.string(),
});
