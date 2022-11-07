import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Contact } from '../interfaces/contact.interface';
import { CreateContactDto, UpdateContactDto } from '../dtos';

@Injectable()
export class ContactsService {
  private contacts: Contact[] = [
    {
      uuid: uuid(),
      usuarioUuid: uuid(),
      nombre: 'Jennyfer Andrea',
      apellidos: 'Salcedo Roa',
      telefono: '3221234567',
      correo: 'JennyferSalR@mail.com',
    },
    {
      uuid: uuid(),
      usuarioUuid: uuid(),
      nombre: 'Clara Inés',
      telefono: '3101234567',
      correo: 'cgamboa@mail.com',
    },
    {
      uuid: uuid(),
      usuarioUuid: uuid(),
      nombre: 'Nixon Raúl',
      apellidos: 'Gamboa',
      telefono: '3131234567',
      correo: 'ngamb123@mail.com',
    },
  ];

  getSaludo(): string {
    return 'Hola desde el servicio Contacts';
  }

  findAll(): Contact[] {
    return this.contacts;
  }

  findOneById(uuid: string): Contact {
    const contact = this.contacts.find((contact) => contact.uuid === uuid);
    if (!contact)
      throw new NotFoundException(`No existe un contacto con uuid:${uuid}`);
    return contact;
  }

  create(createContactDto: CreateContactDto): Contact {
    const newContact = {
      uuid: uuid(),
      ...createContactDto,
    };
    this.contacts.push(newContact);
    return newContact;
  }

  updateDBContact(uuid: string, contactToUpdate: Contact): Contact {
    let existedContact = this.findOneById(uuid);

    this.contacts = this.contacts.map((contact) => {
      if (contact.uuid === uuid) {
        existedContact = { ...existedContact, ...contactToUpdate, uuid };
        return existedContact;
      }
      return contact;
    });
    return existedContact;
  }

  update(uuid: string, createContactDto: CreateContactDto): Contact {
    return this.updateDBContact(uuid, createContactDto);
  }

  partiallyUpdate(uuid: string, updateContactDto: UpdateContactDto): Contact {
    return this.updateDBContact(uuid, updateContactDto);
  }

  delete(uuid: string): void {
    this.findOneById(uuid);
    this.contacts = this.contacts.filter((user) => user.uuid !== uuid);
  }
}
