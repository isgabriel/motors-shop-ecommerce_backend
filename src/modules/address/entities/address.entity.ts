/* eslint-disable prettier/prettier */

import { randomUUID } from 'crypto';

export class Address {
  readonly id: string;
  zip_code: string;
  state: string;
  city: string;
  street: string;
  number: number;
  complement: string;

  constructor() {
    this.id = randomUUID();
  }
}
