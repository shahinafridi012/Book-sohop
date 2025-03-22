interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  category: string;
  description?: string;
  quantity: number;
  inStock: boolean;
}
export default Book;
