import { fetch } from "../utils/request";

export function listMedia(data: any) {
  return fetch<{ data: string }>(`/auth/login`, {
    method: "post",
    body: data,
  });
}
