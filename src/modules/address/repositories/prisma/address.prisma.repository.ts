/* eslint-disable prettier/prettier */
import { ForbiddenException, Injectable } from '@nestjs/common';
import { AddressRepository } from '../address.repository';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateAddressDto } from '../../dto/updateAddress.dto';
import { Address } from '../../entities/address.entity';

@Injectable()
export class AddressPrismaRepository implements AddressRepository {
  constructor(private prisma: PrismaService) {}
  async findOne(id: string, userId: string): Promise<Address> {
    const address = await this.prisma.address.findUnique({
      where: {
        id,
      },
    });

    if (address && address.userId !== userId) {
      throw new ForbiddenException('Insufficient permission');
    }
    return address;
  }

  async update(id: string, updateAddressDto: UpdateAddressDto): Promise<Address> {
    const address = await this.prisma.address.update({
      where: {
        id,
      },
      data: {
        ...updateAddressDto,
      },
    });

    return address;
  }
}
