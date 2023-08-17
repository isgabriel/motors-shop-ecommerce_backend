/* eslint-disable prettier/prettier */
import { UpdateAddressDto } from './dto/updateAddress.dto';
import { AddressRepository } from './repositories/address.repository';

import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AddressService {
  constructor(private addressesRepository: AddressRepository) {}
  async update(id: string, updateAddressDto: UpdateAddressDto, userId: string) {
    const isUser = await this.addressesRepository.findOne(id, userId);
    if (!isUser) {
      throw new NotFoundException('Address not found.');
    }
    const newAddress = await this.addressesRepository.update(
      id,
      updateAddressDto,
    );
    return newAddress;
  }
}
