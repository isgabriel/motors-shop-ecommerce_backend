import { PartialType } from '@nestjs/mapped-types';
import { CreateCarProductDto } from './create-car-product.dto';

export class UpdateCarProductDto extends PartialType(CreateCarProductDto) {}
