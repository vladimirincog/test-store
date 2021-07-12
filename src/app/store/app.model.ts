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
  id: string;
  categoryId: string;
  img?: string;
  name: string;
  description?: string;
  pieces?: number;
  price: string;
}

export interface Billboard {
  img?: string[];
}
