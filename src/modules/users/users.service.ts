/* eslint-disable prettier/prettier */
import { ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { MailService } from '../utils/mail.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';

/**
 * Service responsible for user manipulation.
 *
 * This service handles operations related to users, such as updating and removing.
 */
@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository, private mailService: MailService) {}

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

  async findLogged(id: string) {
    const findUser = await this.userRepository.findLogged(id);

    return findUser;
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
    if (!findUser) throw new NotFoundException('User not found');

    return findUser;
  }

  async update(reqId: string, id: string, updateUserDto: UpdateUserDto) {
    if (reqId !== id) throw new ForbiddenException('Insufficient permission');

    const findUser = await this.userRepository.findOne(id);
    if (!findUser) throw new NotFoundException('User not found');

    return this.userRepository.update(id, updateUserDto);
  }

  async remove(reqId: string, id: string) {
    if (reqId !== id) throw new ForbiddenException('Insufficient permission');

    const findUser = await this.userRepository.findOne(id);
    if (!findUser) throw new NotFoundException('User not found');
    return this.userRepository.delete(id);
  }

  async sendEmailResetPassword(email: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) throw new NotFoundException('User Not found');

    const resetToken = randomUUID();

    await this.userRepository.updateToken(email, resetToken);

    const resetPasswordTemplate = await this.mailService.resetPasswordTemplate(email, user.name, resetToken);
    await this.mailService.sendEMail(resetPasswordTemplate);
  }

  async resetPassword(password: string, resetToken: string) {
    const user = await this.userRepository.findByToken(resetToken);

    if (!user) throw new NotFoundException('User Not found');

    await this.userRepository.updatePassword(user.id, password);
  }
}
