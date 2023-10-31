export type CreateUserParams = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatar: string;
  status: number;
  // roleId: number;
};

export type LoginUser = {
  email: string;
  password: string;
};

export interface AddressType {
  address?: string;
  phoneNumber: number;
}
