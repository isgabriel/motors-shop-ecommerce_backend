/* eslint-disable prettier/prettier */
import { randomUUID } from 'crypto';

export class Img {
  readonly id: string;
  url_img: string;
  carProductsId?: string;

  constructor() {
    this.id = randomUUID();
  }
}
