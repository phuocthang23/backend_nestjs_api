import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { AddressService } from './address.service';
import { AdminGuard } from 'src/guard/verifyRole.guard';
import { AddressType } from 'src/utils/types';

@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Get('/')
  @UseGuards(AdminGuard)
  getUser() {
    // return this.userService.findAll();
  }

  @Get('/:id')
  getOneAddress(@Param('id') id: number) {
    return this.addressService.findOne(Number(id));
  }

  @Put('/update/:id')
  updateUserById(@Param('id') id: number, @Body() body: AddressType) {
    return this.addressService.updateAddress(id, body);
  }
}
