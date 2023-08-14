/* eslint-disable prettier/prettier */

import { Body, Controller, Param, Patch, Request } from '@nestjs/common';
import { AddressService } from './address.service';
import { UpdateAddressDto } from './dto/updateAddress.dto';

@Controller('addresses')
export class AddressController {
  constructor(private readonly addressesService: AddressService) {}
  @Patch(':id')
  update(
    @Request() req,
    @Param('id') id: string,
    @Body() data: UpdateAddressDto,
  ) {
    return this.addressesService.update(id, data, req.user.id);
  }
}
