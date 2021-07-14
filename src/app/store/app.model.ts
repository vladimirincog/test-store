export interface IAdministrator {
  email: string;
  password: string;
}

export interface ICategory {
  id?: string;
  img?: string;
  name: string;
  description: string;
}

export interface IProduct {
  id?: string;
  categoryId: string;
  img?: string;
  name: string;
  description: string;
  pieces: number;
  price: number;
}

export interface IBillboard {
  img?: string[];
}

export interface IClient {
  firstName: string;
  surname: string;
  address: string;
  phone: string;
  email?: string;
}

export interface IOrder {
  products: IProduct[];
  client: IClient;
}
