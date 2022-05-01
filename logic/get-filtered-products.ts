import config from "../config";

export default async function getFilteredProducts(
  categories: string[]
): Promise<any> {
  const { API_URL } = config;

  const headers = {
    "Content-Type": "application/json",
  };

  const body = JSON.stringify({
    sort: {
      key: "price",
      type: "ASC",
    },
    categories,
  });

  const res = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", `${API_URL}/products`);

    if (headers)
      for (const key in headers) xhr.setRequestHeader(key, headers[key]);

    xhr.onload = function () {
      resolve({ status: this.status, body: this.responseText });
    };

    xhr.onerror = function (error) {
      reject(new Error("network error"));
    };

    xhr.send(body);
  });

  if (res?.status !== 200) throw new Error("something went wrong");

  const { data } = await JSON.parse(res?.body);

  return data?.data;
}
