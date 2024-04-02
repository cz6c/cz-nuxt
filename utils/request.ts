import type { FetchOptions } from "ofetch";

const baseURL = "http://43.139.39.151:9600";

interface ResponseType<T> {
  code: number;
  data: T;
  msg: string;
}

interface RequestOptions extends FetchOptions {
  method: "get" | "post";
}

export async function fetch<T = any>(url: string, opts: RequestOptions) {
  return new Promise<ResponseType<T>>(async (resolve, reject) => {
    await $fetch(url, {
      baseURL,
      timeout: 10000,
      ...opts,
      onRequest({ options }) {
        // 设置请求头
        options.headers = options.headers || {};
        // options.headers.authorization = "...";
      },
      onRequestError({ request, options, error }) {
        console.log("🚀 ~ onRequestError ~ request, options, error:", request, options, error);
        // 处理请求错误
      },
      onResponse({ response }) {
        resolve(response._data);
        // 处理响应数据
      },
      onResponseError({ response }) {
        reject(response._data);
        // 处理响应错误
      },
    });
  });
}
