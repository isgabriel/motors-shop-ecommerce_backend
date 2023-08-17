/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class LoginDto {
    @ApiProperty({
        description: "E-mail do usuário",
        default: "example@email.com",
        type: String,
    })
    @IsEmail()
    @IsNotEmpty()
    email:string

    @ApiProperty({
        description: "Senha do usuário",
        default: "123456asd",
        type: String
    })
    @IsString()
    @IsNotEmpty()
    password:string
}