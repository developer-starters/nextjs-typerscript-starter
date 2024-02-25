import {z} from 'zod';

export const dataSchema = z.object({
    price: z.number().multipleOf(0.01),
    color: z.string()
})

export const objectSchema = z.object({
    id: z.string(),
    name: z.string(),
    data: dataSchema
})

export const objectListSchema = z.array(objectSchema).min(1);

export const createObjectSchema = objectSchema.pick({ id: true }).merge(z.object({
    year:z.string(),
    price:z.number().multipleOf(0.01),
    "CPU model":z.string(),
    "Hard disk size":z.string()
}))