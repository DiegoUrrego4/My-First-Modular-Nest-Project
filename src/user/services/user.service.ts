import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getSaludo(): string {
    return 'Hola desde el servicio Users';
  }
}
