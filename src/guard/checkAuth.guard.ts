import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return false; // Không có token, không cho phép truy cập
    }

    const token = authHeader.substring(7); // Bỏ qua phần "Bearer " trong header

    try {
      const user = await this.jwtService.verifyAsync(token);
      request.user = user; // Lưu thông tin người dùng vào request
      return true; // Token hợp lệ, cho phép truy cập
    } catch (error) {
      console.error(error);
      return false; // Token không hợp lệ
    }
  }
}
