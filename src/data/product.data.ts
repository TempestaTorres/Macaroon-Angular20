export interface ProductData {
  id: number;
  name: string;
  count: number;
  price: number;
  icon?: string;
}

export const Products: ProductData[] = [
  {
    id: 1,
    name: 'Макарун с малиной',
    count: 1,
    price: 1.70,
    icon: '/assets/images/mac1.png'
  },
  {
    id: 2,
    name: 'Макарун с манго',
    count: 1,
    price: 1.70,
    icon: '/assets/images/mac2.png'
  },
  {
    id: 3,
    name: 'Пирог с ванилью',
    count: 1,
    price: 1.70,
    icon: '/assets/images/mac3.png'
  },
  {
    id: 4,
    name: 'Пирог с фисташками',
    count: 1,
    price: 1.70,
    icon: '/assets/images/mac4.png'
  }
]
