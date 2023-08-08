/* eslint-disable prettier/prettier */
import { CreateImgDto } from '../dto/createImg.dto';
import { Img } from '../entities/img.entity';

export abstract class ImgRepository {
  abstract create(data: CreateImgDto): Promise<Img>;
}
