import { z } from "zod";
import {
  collectionSchema,
  currentUserSchema,
  searchResultSchema,
  songSchema,
  userSchema,
} from "./schemas";

export type CurrentUser = z.infer<typeof currentUserSchema>;
export type User = z.infer<typeof userSchema>;
export type Song = z.infer<typeof songSchema>;
export type Collection = z.infer<typeof collectionSchema>;
export type SearchResult = z.infer<typeof searchResultSchema>;
