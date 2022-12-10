export interface ProductType {
  id: number;
  name: string;
  brand: string;
  product_code: string;
  vendor: string;
  purchasedAt: string;
  category: {
    id: number;
    name: string;
  };
  department: {
    id: number;
    name: string;
  };
  usingBy: {
    id: number;
    fullName: string;
  };
}

export interface CreateProductBody {
  name: string;
  product_code: string;
  brand: string;
  details: string;
  purchasedAt: Date;
  vendor: string;
  usingBy: string;
  department: string;
  category: string;
}

export interface UpdateProductBody {
  id: number;
  body: {
    data: {
      name: string;
      product_code: string;
      brand: string;
      details: string;
      purchasedAt: Date;
      vendor: string;
      usingBy: {
        id: string;
      };
      department: {
        id: string;
      };
      category: {
        id: string;
      };
    };
  };
}

export interface UpdateProductPops {
  closeModal: Function;
  currentProduct: any;
}

export interface ProductFormInput {
  name: string;
  product_code: string;
  brand: string;
  details: string;
  vendor: string;
  user: string;
  department: string;
  category: string;
}

export interface ProductInput extends ProductFormInput {}
