export interface User{
  id: string;
  email: string;
  password: string;
}

export interface CreaateUserDto extends Omit<User, 'id'> {}
