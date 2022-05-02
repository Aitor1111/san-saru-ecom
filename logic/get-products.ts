import config from "../config";

export default async function getProducts(page: number = 1): Promise<any> {
  const { API_URL } = config;

  const res = await fetch(`${API_URL}/products?page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.status !== 200) throw new Error("something went wrong");
  const { data } = await res.json();

  return data;
}
