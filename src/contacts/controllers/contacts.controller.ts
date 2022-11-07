import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ContactsService } from '../services/contacts.service';
import { CreateContactDto } from '../dtos/create-contact.dto';
import { UpdateContactDto } from '../dtos/update-contact.dto';
import { Contact } from '../interfaces/contact.interface';

@Controller('contact')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Get()
  getTasks(): Contact[] {
    return this.contactsService.findAll();
  }

  @Get('message')
  getSaludo(): string {
    return this.contactsService.getSaludo();
  }

  @Get(':uuid')
  getTarea(@Param('uuid') uuid: string): Contact {
    return this.contactsService.findOneById(uuid);
  }

  @Post()
  createUser(@Body() createContactDto: CreateContactDto): Contact {
    return this.contactsService.create(createContactDto);
  }

  @Put(':uuid')
  updateUser(
    @Param('uuid') uuid: string,
    @Body() createContactDto: CreateContactDto,
  ): Contact {
    return this.contactsService.update(uuid, createContactDto);
  }

  @Patch(':uuid')
  partiallyUpdateUser(
    @Param('uuid') uuid: string,
    @Body() updateContactDto: UpdateContactDto,
  ): Contact {
    return this.contactsService.partiallyUpdate(uuid, updateContactDto);
  }

  @Delete(':uuid')
  deleteUser(@Param('uuid') uuid: string): void {
    this.contactsService.delete(uuid);
  }
}
