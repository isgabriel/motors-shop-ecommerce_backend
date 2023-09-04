/* eslint-disable prettier/prettier */
import { CreateImgDto } from '../dto/createImg.dto';
import { UpdateImgDto } from '../dto/updateImg.dto';
import { Img } from '../entities/img.entity';

export abstract class ImgRepository {
  abstract create(data: CreateImgDto): Promise<Img>;
  abstract findOne(id: string): Promise<Img>;
  abstract delete(id: string): Promise<void>;
  abstract update(id: string, data: UpdateImgDto): Promise<Img> | Img;
}
