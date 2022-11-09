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
export class OutLastnameGet implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((usuarios: UserInterface[]) => {
        usuarios.forEach((usuario) => {
          console.log('usuario antes', usuario);
          if (!usuario.lastname) {
            console.log('Entrando al if');
            usuario.lastname = null;
          }
          console.log('usuario después', usuario);
          return usuario;
        });
        return usuarios;
      }),
    );
  }
}
