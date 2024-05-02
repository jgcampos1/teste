export const mountQuery = <T extends object>(params: T): string => {
  const query = Object.keys(params)
    .filter((key) => !!params[key as keyof T])
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(params[key as keyof T]))}`
    )
    .join("&");

  return query;
};
