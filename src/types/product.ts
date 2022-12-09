export interface ProductType {
  id: number;
  attributes: {
    name: string;
    brand: string;
    product_code: string;
    vendor: string;
    purchasedAt: string;
    category: {
      data: {
        id: number;
        attributes: {
          name: string;
        };
      };
    };
    department: {
      data: {
        id: number;
        attributes: {
          name: string;
        };
      };
    };
    usingBy: {
      data: {
        id: number;
        attributes: {
          fullName: string;
        };
      };
    };
  };
}

export interface CreateProductBody {
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
