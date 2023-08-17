/* eslint-disable prettier/prettier */

import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';
import { Address } from '@prisma/client';

export class User {
  readonly id: string;
  readonly createdAt: string;
  name: string;
  email: string;
  @Exclude()
  password: string;
  cpf: string;
  isAdmin: boolean;
  telephone: string;
  description: string | null;
  birthdate: string;
  address?: Address;

  constructor() {
    this.id = randomUUID();
    this.createdAt = new Date().toISOString();
  }
}
