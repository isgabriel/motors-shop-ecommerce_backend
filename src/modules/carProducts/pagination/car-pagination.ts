/* eslint-disable prettier/prettier */
import { PaginateFunction, PaginateOptions } from './car-pagination.interface';

export const paginator = (
  defaultOptions: PaginateOptions,
): PaginateFunction => {
  return async (model, args: any = { where: undefined }, options) => {
    const page = Number(options?.page || defaultOptions?.page) || 1;
    const perPage = Number(options?.perPage || defaultOptions?.perPage) || 10;
    const year = Number(args?.where.year) || undefined;
    const minPrice = Number(args?.where.price.lte) || undefined;
    const maxPrice = Number(args?.where.price.gte) || undefined;
    const minKM = Number(args?.where.km.lte) || undefined;
    const maxKM = Number(args?.where.km.gte) || undefined;

    const skip = page > 0 ? perPage * (page - 1) : 0;
    const [total, data] = await Promise.all([
      model.count({
        where: {
          ...args.where,
          year: year,
          price: { lte: minPrice, gte: maxPrice },
          km: { lte: minKM, gte: maxKM },
        },
      }),
      model.findMany({
        where: {
          ...args.where,
          year: year,
          price: { lte: minPrice, gte: maxPrice },
          km: { lte: minKM, gte: maxKM },
        },
        take: perPage,
        skip,
      }),
    ]);
    const lastPage = Math.ceil(total / perPage);

    return {
      total,
      lastPage,
      currentPage: page,
      perPage,
      prev: page > 1 ? page - 1 : null,
      next: page < lastPage ? page + 1 : null,
      data,
    };
  };
};
