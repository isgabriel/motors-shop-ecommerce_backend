/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateImgDto {
  @ApiProperty({
    type: String,
    description: 'Deve ser uma URL de imagem válida',
    example:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2qtTKTXZsiX9Yip0XnwbQBUc46c4dJUhPPrWLpzssYSWL53GxBjZj9V2J8HacessJ7Vx7yZa4yx_c_os8uu1TnFb5GoUhUW1w0vwnO9d6mx-LRn4o8xtxvJm5xzfOhVdoaQB1eVR2wyy2wf2wJvkrpL_Mk8dMuSPDStJt72ybzPsrSjf-TyTNrrOiFw/s2560/Porsche-718-Style-Edition%20%286%29.jpg',
  })
  @IsString()
  url_img: string;
}
