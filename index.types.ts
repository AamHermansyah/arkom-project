export type User = {
  id: number;
  name: string;
  username: string;
  address: string;
  phone: string;
  email: string;
  imageUrl: string;
};

export type Ticket = {
  id: number;
  userId: number;
  user: User;
  qty: number;
  createdAt: string;
  price: number;
  totalPrice: number;
  methodPayment: string;
  date: string;
};
