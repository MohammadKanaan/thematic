import { queryClient } from "@/lib/react-query";
import { User } from "@/types";
import { userSchema } from "@/types/schemas";

export default function useGetUser(): User | null {
  try {
    return userSchema.parse(queryClient.getQueryData(["currentUser"]));
  } catch (error) {
    return null;
  }
}
