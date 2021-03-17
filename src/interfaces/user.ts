export interface IUserData {
  id: number;
  name: string;
  cpf: string;
  cellphone: string;
  birth_date: string;
  type: string;
}

export interface IUserServiceCreateData {
  name: string;
  cpf: string;
  cellphone: string;
  birth_data: string;
  type: string;
  password: string;
}

export interface IUserFormSubmitData {
  id?: number;
  name: string;
  cpf: string;
  cellphone: string;
  birth_date: string;
  type: string;
  password?: string;
}