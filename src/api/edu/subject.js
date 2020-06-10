import request from "@utils/request";
const BASE_URL = "/admin/edu/subject";
const MOCK_BASE_URL = `http://localhost:9527${BASE_URL}`;
export function reqGetSubjectList(page, limit) {
  return request({
    url: `${MOCK_BASE_URL}/${page}/${limit}`,
    method: "GET",
  });
}
export function reqGetSubSubjectList(parentId) {
  return request({
    url: `${MOCK_BASE_URL}/get/${parentId}`,
    method: "GET",
  });
}
export function reqAddSubject(title, parentId) {
  return request({
    url: `${MOCK_BASE_URL}/save`,
    method: "POST",
    data: {
      title,
      parentId,
    },
  });
}
