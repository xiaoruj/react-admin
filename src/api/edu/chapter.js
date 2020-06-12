import request from "@utils/request";
const BASE_URL = "/admin/edu/chapter";
export function reqGetChapterList({ page, limit, courseId }) {
  return {
    url: `${BASE_URL}/${page}/${limit}`,
    method: "GET",
    params: {
      courseId,
    },
  };
}
