export interface IUserData {
  id: number;
  name: string;
  cpf: string;
  cellphone: string;
  birth_date: string;
  type: string;
}

export interface IUserCreateData {
  name: string;
  cpf: string;
  cellphone: string;
  birth_data: string;
  type: userType;
  password: string;
}