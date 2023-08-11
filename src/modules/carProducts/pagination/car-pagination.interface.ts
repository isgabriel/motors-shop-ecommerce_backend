export interface PaginatedResult<P> {
  total: number;
  lastPage: number;
  currentPage: number;
  perPage: number;
  prev: number | null;
  next: number | null;
  data: P[];
}

export type PaginateOptions = {
  page?: number | string;
  perPage?: number | string;
};

export type PaginateFunction = <P, A>(
  model: any,
  args?: A,
  options?: PaginateOptions,
) => Promise<PaginatedResult<P>>;
