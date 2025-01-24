import axiosInstance from "@/lib/axios";
import { Collection } from "@/types";
import { collectionSchema } from "@/types/schemas";

export default async function getMyPlaylists(): Promise<Collection[] | null> {
  try {
    const res = (await axiosInstance.get(`projects`)).data.items;
    console.log("projects", res);
    return collectionSchema.array().parse(res);
  } catch (error) {
    console.error(error);
    return null;
  }
}
