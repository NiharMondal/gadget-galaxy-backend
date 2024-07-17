import {z} from 'zod'

const createBrand = z.object({
   name:z.string({required_error:"Brand name is required"}).trim()
})


export const brandValidation = {createBrand}