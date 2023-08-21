/* eslint-disable prettier/prettier */

import { Address } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

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
  active: boolean;
  birthdate: string;
  address?: Address;

  constructor() {
    this.id = randomUUID();
    this.createdAt = new Date().toISOString();
  }
}
