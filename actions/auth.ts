import axiosInstance from "@/lib/axios";
import { User } from "@/types";
import { userSchema } from "@/types/schemas";

export async function login(auth_token: string): Promise<User | null> {
  try {
    const res = (
      await axiosInstance.get("account", {
        headers: {
          Authorization: "Bearer " + auth_token,
        },
      })
    ).data;
    return userSchema.parse(res);
  } catch (error) {
    console.error(error);
    return null;
  }
}
