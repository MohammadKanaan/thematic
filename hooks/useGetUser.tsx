import { queryClient } from "@/lib/react-query";
import { CurrentUser } from "@/types";
import { currentUserSchema } from "@/types/schemas";

export default function useGetUser(): CurrentUser | null {
  try {
    return currentUserSchema.parse(queryClient.getQueryData(["currentUser"]));
  } catch (error) {
    return null;
  }
}
