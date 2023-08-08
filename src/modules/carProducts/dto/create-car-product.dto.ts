/* eslint-disable prettier/prettier */
import { IsString, IsNumber } from 'class-validator';

export class CreateCarProductsDto {
  @IsString()
  name: string;
  cover: string;

  @IsNumber()
  price: number;
  year: number;
  km: number;
  description?: string;
  color: string;
  gasoline: Gasoline;
  tablePife: number;
  business: boolean;
  imgId: string;
}

export enum Gasoline {
  flex = 'FLEX',
  hibrid = 'HIBRID',
  electric = 'ELECTRIC',
}
