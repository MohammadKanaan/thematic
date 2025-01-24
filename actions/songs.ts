import axiosInstance from "@/lib/axios";
import { Song } from "@/types";
import { songSchema } from "@/types/schemas";

export default async function getSongs(
  offset: number,
  projectId?: string
): Promise<Song[] | null> {
  try {
    const res = (
      await axiosInstance.get(`projects/${projectId || 1}/songs`, {
        params: {
          offset,
        },
      })
    ).data.items;
    console.log("projects", res);
    return songSchema.array().parse(res);
  } catch (error) {
    console.error(error);
    return null;
  }
}
