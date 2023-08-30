/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean, IsNotEmpty, IsOptional, IsArray } from 'class-validator';
import { CreateImgDto } from 'src/modules/imgCar/dto/createImg.dto';

enum Gasoline {
  flex = 'FLEX',
  hibrid = 'HIBRID',
  electric = 'ELECTRIC',
}

export class CreateCarProductsDto {
  @ApiProperty({
    type: String,
    description: 'URL da imagem de capa',
    example: 'https://example.com/car.jpg',
  })
  @IsString()
  @IsNotEmpty()
  coverImg: string;

  @ApiProperty({
    type: Number,
    description: 'Preço do produto',
    example: 25000,
  })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    type: Number,
    description: 'Ano do produto',
    example: 2023,
  })
  @IsNumber()
  @IsNotEmpty()
  year: number;

  @ApiProperty({
    type: Number,
    description: 'Quilometragem do produto',
    example: 5000,
  })
  @IsNumber()
  @IsNotEmpty()
  km: number;

  @ApiProperty({
    type: String,
    description: 'Descrição do produto',
    example: 'Um carro veloz e elegante.',
  })
  @IsString()
  description?: string;

  @ApiProperty({
    type: String,
    description: 'Cor do produto',
    example: 'Vermelho',
  })
  @IsString()
  @IsNotEmpty()
  color: string;

  @ApiProperty({
    enum: Gasoline,
    description: 'Tipo de combustível do produto',
    example: Gasoline.flex,
  })
  gasoline: Gasoline;

  @ApiProperty({
    type: Number,
    description: 'Pontuação de Pife na tabela',
    example: 9,
  })
  @IsNumber()
  @IsNotEmpty()
  tablePife: number;

  @ApiProperty({
    type: String,
    description: 'Modelo do carro',
    example: 'Sedan',
  })
  @IsString()
  @IsNotEmpty()
  model: string;

  @ApiProperty({
    type: String,
    description: 'Marca do carro',
    example: 'Toyota',
  })
  @IsString()
  @IsNotEmpty()
  brand: string;

  @ApiProperty({
    type: Boolean,
    description: 'É abaio da tabela Fipe?',
    example: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  business: boolean;

  @ApiProperty({
    type: Boolean,
    description: 'Disponibilidade para negócios',
    example: true,
  })
  @IsBoolean()
  @IsOptional()
  active: boolean;

  @IsArray()
  @IsOptional()
  img: CreateImgDto[];
}
