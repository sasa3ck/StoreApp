export interface localList {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface fakeStoreApi {
  id: number;
  title: string;
  description?: string;
  price: number;
  image: string;
  category: string;
}

export interface jsonplaceholder {
  id: number;
  userId?: number;
  title?: string;
  name?: string;
  email?: string;
  body: string;
}
