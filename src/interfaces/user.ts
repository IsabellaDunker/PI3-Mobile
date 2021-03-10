import { userType } from "../enums/userType";

export interface IUserData {
  id: number;
  name: string;
  cpf: string;
  cellphone: string;
  birth_data: string;
  type: userType;
}

export interface IUserCreateData {
  name: string;
  cpf: string;
  cellphone: string;
  birth_data: string;
  type: userType;
  password: string;
}