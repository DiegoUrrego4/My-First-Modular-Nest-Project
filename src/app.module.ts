import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TasksModule } from './tasks/tasks.module';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [UserModule, TasksModule, ContactsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
