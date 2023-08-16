/* eslint-disable prettier/prettier */
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}
  async create(createUserDto: CreateUserDto) {
    const findUser = await this.userRepository.findByEmail(createUserDto.email);
    if (findUser) {
      throw new ConflictException('Email already exists');
    }

    const findUser2 = await this.userRepository.findByCpf(createUserDto.cpf);
    if (findUser2) {
      throw new ConflictException('Cpf already exists');
    }

    const user = await this.userRepository.create(createUserDto);

    return user;
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findByEmail(email: string) {
    const findUser = await this.userRepository.findByEmail(email);

    return findUser;
  }

  async findByCpf(cpf: string) {
    const findUser = await this.userRepository.findByEmail(cpf);

    return findUser;
  }

  async findOne(id: string) {
    const findUser = await this.userRepository.findOne(id);
    if (!findUser) {
      throw new NotFoundException('User not found');
    }
    return findUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
