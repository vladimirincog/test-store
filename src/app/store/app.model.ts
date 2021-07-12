export interface Administrator {
  email: string;
  password: string;
}

export interface Category {
  id?: string;
  img?: string;
  name: string;
  description: string;
}

export interface Product {
  id?: string;
  categoryId: string;
  img?: string;
  name: string;
  description: string;
  pieces: number;
  price: number;
}

export interface Billboard {
  img?: string[];
}

export interface Client {
  firstName: string;
  surname: string;
  address: string;
  phone: string;
  email?: string;
}

export interface Order {
  products: Product[];
  client: Client;
}
