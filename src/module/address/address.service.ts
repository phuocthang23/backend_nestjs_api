import { Injectable } from '@nestjs/common';
import { Address } from './entities/address.entity';
import { AddressType } from 'src/utils/types';
import { AddressRepository } from './address.repository';

@Injectable()
export class AddressService {
  constructor(private addressRepository: AddressRepository) {}

  async findAll(): Promise<Address[]> {
    return await this.addressRepository.findAll();
  }

  async findOne(id: number): Promise<Address> {
    return await this.addressRepository.findAddressById(id);
  }

  async updateAddress(id: number, data: AddressType): Promise<any> {
    const checkAddress = await this.addressRepository.findAddressById(id);
    if (checkAddress) {
      return await this.addressRepository.update(id, data);
    } else {
      return {
        message: 'Address not found',
      };
    }
  }
}
