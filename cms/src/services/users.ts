import { api, formatError } from "./api";

export async function getAllUsers(queryData: {} | null | undefined) {
  let response;

  const rawResponse = await api.get("/users", { ...queryData });

  if (rawResponse.status >= 300) {
    throw formatError(rawResponse);
  }

  response = rawResponse.data;

  return response;
}

export async function blockUser(userId: string | null | undefined) {
  let response;

  const rawResponse = await api.put(`/users/block/${userId}`);

  if (rawResponse.status >= 300) {
    throw formatError(rawResponse);
  }

  response = rawResponse.data;

  return response;
}

export async function deleteUser(userId: string | null | undefined) {
  let response;

  const rawResponse = await api.delete(`/users/${userId}`);

  if (rawResponse.status >= 300) {
    throw formatError(rawResponse);
  }

  response = rawResponse;

  return response;
}
