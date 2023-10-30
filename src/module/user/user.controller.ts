import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/user.dto';
import { UserService } from './user.service';
// import { RolesGuard } from 'src/guards/test.guard';

@Controller('user')
// @UseGuards(RolesGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  getUser() {
    console.log(this.userService.findAll());
    return this.userService.findAll();
  }

  // @Post('/register')
  // // @UsePipes(new ValidationPipe())
  // createUser(@Body() body: CreateUserDto) {
  //   return this.userService.createUsers(body);
  // }

  @Patch('/update/:id')
  updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateUserDto,
  ) {
    return this.userService.updateUsers(id, body);
  }

  @Patch('/status/:id')
  deleteUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.changeStatus(id);
  }
}
