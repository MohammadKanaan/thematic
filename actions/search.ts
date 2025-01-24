import axiosInstance from "@/lib/axios";
import { SearchResult } from "@/types";
import { searchResultSchema } from "@/types/schemas";

export default async function getSearchResults(
  keyword: string
): Promise<SearchResult | null> {
  try {
    const res = (
      await axiosInstance.get("search", {
        params: {
          keyword: keyword,
        },
      })
    ).data;
    console.log("SearchResult", res);
    return searchResultSchema.parse(res);
  } catch (error) {
    console.error(error);
    return null;
  }
}
