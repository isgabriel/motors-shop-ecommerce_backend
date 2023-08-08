/* eslint-disable prettier/prettier */
import { Gasoline } from '@prisma/client';
import { randomUUID } from 'crypto';

export class CarProduct {
  readonly id: string;
  name: string;
  coverImg: string;
  price: number;
  year: number;
  km: number;
  description?: string;
  color: string;
  gasoline: Gasoline;
  tablePife: number;
  business: boolean;
  imgId?: string;

  constructor() {
    this.id = randomUUID();
  }
}
