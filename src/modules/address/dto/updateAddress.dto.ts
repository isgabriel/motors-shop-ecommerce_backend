/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import { createAddressDto } from './createAddress.dto';

export class updateAddressDto extends PartialType(createAddressDto) {}
