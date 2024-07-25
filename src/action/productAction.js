'use server'
import { deleteProductService, insertProductService } from '@/services/products.service';
import { revalidateTag } from 'next/cache';

// using server action to isert data after client input 
export async function handleProducterServer(productInput) {
    
    const newProduct = {
        name: productInput.get('name'),
        createdAt: productInput.get('createdAt'),
    }
    console.log(newProduct);
    // calling service to insert data
    await insertProductService(newProduct)
    // calling revalidate tag use for insert data rendering 
    revalidateTag("product")
}

// delete product server action 
export async function handleDeleteProcutServer (productId) {
    await deleteProductService(productId)
    revalidateTag("product");
}