/* eslint-disable prettier/prettier */
import { randomUUID } from 'crypto';

export class CarProduct {
  readonly id: string;
  name: string;
  cover: string;
  price: number;
  year: number;
  km: number;
  description?: string;
  color: string;
  gasoline: Gasoline;
  tablePife: number;
  business: boolean;
  imgId: string;

  constructor() {
    this.id = randomUUID();
  }
}

export enum Gasoline {
  flex = 'FLEX',
  hibrid = 'HIBRID',
  electric = 'ELECTRIC',
}
