import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  sigup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @Post('signin')
  sigin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
