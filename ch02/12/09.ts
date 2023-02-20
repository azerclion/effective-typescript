const checkedFetch: typeof fetch = async (input, init) => {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw new Error("Request failed: " + response.status);
  }
  return response;
};

type FetchFn = (
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) => Promise<Response>;

const checkedFetchFn: FetchFn = async (input, init) => {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw new Error("Request failed: " + response.status);
  }
  return response;
};

export default {};
