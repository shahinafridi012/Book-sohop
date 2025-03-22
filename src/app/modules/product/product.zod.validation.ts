import { z } from 'zod';

const bookSchema = z.object({
  id: z.string(),
  title: z
    .string()
    .min(5, { message: 'Title is required and must be at least 5 characters' }),

  author: z
    .string()
    .min(5, {
      message: 'Author name is required and must be at least 5 characters',
    })
    .max(20, { message: 'Author name cannot be longer than 20 characters' })
    .refine((value) => value.charAt(0) === value.charAt(0).toUpperCase(), {
      message: 'Author name must be capitalized',
    }),

  price: z.number().min(0, { message: 'Price must be a positive number' }),

  category: z
    .string()
    .min(3, { message: 'Category must be at least 3 characters long' }),

  description: z.string().optional(),

  quantity: z
    .number()
    .int()
    .min(0, { message: 'Quantity must be a positive integer' }),

  inStock: z.boolean().default(true),
});

export default bookSchema;
