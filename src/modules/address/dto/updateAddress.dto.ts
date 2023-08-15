/* eslint-disable prettier/prettier */

import { PartialType } from '@nestjs/mapped-types';
import { createAddressDto } from './createAddress.dto';

export class UpdateAddressDto extends PartialType(createAddressDto) {}
