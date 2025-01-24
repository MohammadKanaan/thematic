import axiosInstance from "@/lib/axios";
import { queryClient } from "@/lib/react-query";
import { CurrentUser } from "@/types";
import { currentUserSchema } from "@/types/schemas";
import AsyncStorage from "@react-native-async-storage/async-storage";

const saveAuthToken = async (value: string) => {
  try {
    await AsyncStorage.setItem("auth_token", value);
  } catch (e) {
    console.error(e);
  }
};

export async function login(auth_token: string): Promise<CurrentUser | null> {
  try {
    const res = (
      await axiosInstance.get("account", {
        headers: {
          Authorization: "Bearer " + auth_token,
        },
      })
    ).data;
    saveAuthToken(res);
    return currentUserSchema.parse(res);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function logout() {
  await AsyncStorage.setItem("auth_token", "");
  queryClient.clear();
}
