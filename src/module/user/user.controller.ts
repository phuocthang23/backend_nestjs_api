import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/user.dto';
import { UserService } from './user.service';
import { AuthGuard } from 'src/guard/checkAuth.guard';

@Controller('user')
// @UsePipes(new HidePasswordPipe())

// @UseGuards(RolesGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  @UseGuards(AuthGuard)
  getUser() {
    return this.userService.findAll();
  }

  @Get('/userdetail')
  @UseGuards(AuthGuard)
  getOneUser(@Param('id') id: number) {
    console.log(id);
    return this.userService.findOne(id);
  }

  @Patch('/update/:id')
  @UseGuards(AuthGuard)
  updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateUserDto,
  ) {
    return this.userService.updateUsers(id, body);
  }

  @Patch('/status')
  @UseGuards(AuthGuard)
  deleteUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.changeStatus(id);
  }
}
