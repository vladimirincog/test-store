export interface IUser {
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
  lastName: string;
  address: string;
  phone: string;
  email?: string;
}

export interface IOrder {
  id?: string;
  products: IProduct[];
  client: IClient;
  status: 'обрабатывается' | 'подтвержден' | 'выполнен' | 'отменен'; //"processing" | "confirmed" | "completed" | "canceled"
}

export interface IAuthResponse {
  accessToken: string;
  user: {
    email: string;
    id: number;
  }
}

export interface IToken{
  accessToken: string;
  expires: string;
}
