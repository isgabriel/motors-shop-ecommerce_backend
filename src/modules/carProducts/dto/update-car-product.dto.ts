import { PartialType } from '@nestjs/mapped-types';
import { CreateCarProductsDto } from './create-car-product.dto';

export class UpdateCarProductDto extends PartialType(CreateCarProductsDto) {}
