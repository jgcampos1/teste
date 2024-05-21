export type Paginated<T> = {
  items: T;
  count: number;
  totalPages: number;
  totalItems: number;
  page: number;
  pageSize: number;
};
