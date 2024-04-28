import type { PageServerLoad } from "./$types";
import { getContentList } from "$lib/services/microcms";

export const load: PageServerLoad = async () => {
  const res = await getContentList("blogs");

  return {
    blogList: res,
  };
};
