import { ApiKey } from "@/utils/constants";

export async function GetStatusTasksById(userId: string) {
  const url = `http://34.238.193.94:3000/users/${userId}/tasks/status`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "x-api-key": `${ApiKey}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
}
