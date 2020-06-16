import request from "@utils/request";
const BASE_URL = "/admin/edu/course";
export function reqGetAllCourseList() {
  return request({
    url: `${BASE_URL}`,
    method: "GET",
  });
}
export function reqGetCourseList({
  page,
  limit,
  teacherId,
  subjectId,
  subjectParentId,
  title,
  sortBy,
  sort,
}) {
  return request({
    url: `${BASE_URL}/${page}/${limit}`,
    method: "GET",
    params: {
      teacherId,
      subjectId,
      subjectParentId,
      title,
      sortBy,
      sort,
    },
  });
}
