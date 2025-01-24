import z from "zod";

export const loginSchema = z.object({
  auth_token: z.string(),
});

// only a snapshot of what the server returns
export const currentUserSchema = z.object({
  email: z.string(),
  city: z.string(),
  country: z.string(),
  profile_image_url: z.string(),
});

export const userSchema = z.object({
  id: z.number(),
  profile_name: z.string().optional().nullable(),
  bio: z.string().nullable(),
  profile_image_url: z.string().optional().nullable(),
  banner_image_url: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  album_art_url: z.string().optional().nullable(),
  following: z.boolean(),
  subscribed: z.boolean(),
  is_premium: z.boolean(),
  user_type: z.string(),
});

export const songSchema = z.object({
  id: z.number(),
  name: z.string(),
  duration: z.string(),
  artist_id: z.number(),
  artist_name: z.string(),
  artist_image_url: z.string(),
  album_id: z.number(),
  album_name: z.string(),
  album_art_url: z.string(),
});

export const collectionSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  art_file_url: z.string(),
  public: z.boolean(),
  created_at_formatted: z.string(),
  user: userSchema,
  songs: z.array(songSchema),
});

export const searchResultSchema = z.object({
  songs: z.array(songSchema).optional(),
  artists: z.array(userSchema).optional(),
  creators: z.array(userSchema).optional(),
  collcetions: z.array(collectionSchema).optional(),
});
