import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '../user.entity';

export const CurrentUser = createParamDecorator(
  (data: never, ctx: ExecutionContext): User => {
    const request = ctx.switchToHttp().getRequest();
    console.log(request.session.userId);
    return request.user;
  },
);
