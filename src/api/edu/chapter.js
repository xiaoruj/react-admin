import request from "@utils/request";
const BASE_URL = "/admin/edu/chapter";
export function reqGetChapterList({ page, limit, courseId }) {
  return request({
    url: `${BASE_URL}/${page}/${limit}`,
    method: "GET",
    params: {
      courseId,
    },
  });
}
export function reqBatchRemoveChapterList(idList) {
  return request({
    url: `${BASE_URL}/batchRemove`,
    method: "DELETE",
    data: {
      idList,
    },
  });
}
