import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactsService {
  getSaludo(): string {
    return 'Hola desde el servicio Contacts';
  }
}
