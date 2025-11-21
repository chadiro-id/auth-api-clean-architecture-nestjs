import { Controller, Delete, Post, Put } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post()
  async handlePostAuth() {}

  @Put()
  async handlePutAuth() {}

  @Delete()
  async handleDeleteAuth() {}
}
