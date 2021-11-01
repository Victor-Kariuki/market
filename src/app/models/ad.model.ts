export interface Ad {
  _id: string;
  itemId: string;
  type: string;
  title: string;
  condition: string;
  category: string;
  image: Array<File>;
  images: Array<File>;
  description: string;
  prize: number;
  delivery: string;
  toPayDelivery: string;
  name: string;
  city: string;
  phone: string;
  email: string;
  views: number;
  isActive: string;
  dateCreated: string;
}
