import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserInterface } from '../interfaces/user.interface';

@Injectable()
export class OutCreateUpdateLastname implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((usuario: UserInterface) => {
        if (!usuario.lastname) usuario.lastname = null;
        return usuario;
      }),
    );
  }
}
