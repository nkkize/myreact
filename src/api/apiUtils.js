export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.tatus === 400) {
    const error = await response.text();
    throw new Error(error);
  }

  throw new Error("Network response was not OK");
}

export function handleError(error) {
  //eslint-disable-next-line no-console
  console.error("API call failed: " + error);
}
