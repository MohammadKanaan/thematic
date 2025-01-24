import axiosInstance from "@/lib/axios";
import { CurrentUser } from "@/types";
import { currentUserSchema } from "@/types/schemas";

export async function login(auth_token: string): Promise<CurrentUser | null> {
  try {
    const res = (
      await axiosInstance.get("account", {
        headers: {
          Authorization: "Bearer " + auth_token,
        },
      })
    ).data;
    return currentUserSchema.parse(res);
  } catch (error) {
    console.error(error);
    return null;
  }
}
