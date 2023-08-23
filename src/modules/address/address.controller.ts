/* eslint-disable prettier/prettier */

import { Body, Controller, Param, Patch, Request, UseGuards } from '@nestjs/common';
import { AddressService } from './address.service';
import { UpdateAddressDto } from './dto/updateAddress.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('addresses')
export class AddressController {
  constructor(private readonly addressesService: AddressService) {}
  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Request() req, @Param('id') id: string, @Body() data: UpdateAddressDto) {
    return this.addressesService.update(id, data, req.user.id);
  }
}
