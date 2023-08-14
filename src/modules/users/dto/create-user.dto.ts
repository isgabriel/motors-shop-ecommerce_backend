/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    description: 'Nome do usuário',
    example: 'Bob Salazar',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: String,
    description: 'E-mail do usuário',
    example: 'example@email.com',
  })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    type: String,
    description: 'Senha do usuário',
    example: '123456asd',
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;

  @ApiProperty({
    type: String,
    description: 'CPF do usuário',
    example: '12345678912',
  })
  @IsString()
  @MaxLength(11)
  @IsNotEmpty()
  cpf: string;

  @ApiProperty({
    type: Boolean,
    description: 'Se o usuário será vendendor ou não',
  })
  @IsBoolean()
  isAdmin: boolean;

  @ApiProperty({
    type: String,
    description: 'Telefone do usuário',
    example: '11 9999 8888',
  })
  @IsString()
  @MaxLength(15)
  @IsNotEmpty()
  telephone: string;

  @ApiProperty({
    type: String,
    description: 'Descrição breve do usuário',
    example: 'Sou uma pessoa simples e honesta',
  })
  @IsString()
  description: string;

  @ApiProperty({
    type: String,
    description: 'Data de nascimento do usuário',
    example: '05-11-1994',
  })
  @IsString()
  @IsNotEmpty()
  birthdate: string;
}
