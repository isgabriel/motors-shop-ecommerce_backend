/* eslint-disable prettier/prettier */
import {
  IsString,
  IsNumber,
  IsBoolean,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

export class CreateCarProductsDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  coverImg: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  year: number;

  @IsNumber()
  @IsNotEmpty()
  km: number;

  @IsString()
  description?: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  gasoline: Gasoline;

  @IsNumber()
  @IsNotEmpty()
  tablePife: number;

  @IsBoolean()
  @IsNotEmpty()
  business: boolean;

  @IsString()
  @IsOptional()
  imgId?: string[];
}

export enum Gasoline {
  flex = 'FLEX',
  hibrid = 'HIBRID',
  electric = 'ELECTRIC',
}
