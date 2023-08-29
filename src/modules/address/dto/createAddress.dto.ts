/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class createAddressDto {
  @ApiProperty({
    description: "Zipcode do endereço do usuário",
    default: '12345678',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(8)
  zip_code: string;

  @ApiProperty({
    description: "Estado do endereço do usuário",
    default: 'SP',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(2)
  state: string;

  @ApiProperty({
    description: "Cidade do endereço do usuário",
    default: 'Tangamandápio',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  city: string;

  @ApiProperty({
    description: "Rua do endereço do usuário",
    default: 'Rua do Desespero',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  street: string;

  @ApiProperty({
    description: "Número do endereço do usuário",
    default: 69,
    type: Number,
  })
  @IsNotEmpty()
  @IsNumber()
  number: number;

  @ApiProperty({
    description: "Complemento do endereço do usuário",
    default: 'Bloco C',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  complement: string;
}
