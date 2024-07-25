import FooterComponent from '@/components/FooterComponent'
import NavbarComponent from '@/components/NavbarComponent'
import React from 'react'
import TableProductComponent from './_components/TableProductComponent'
import FormProductComponent from './_components/FormProductComponent'
import { getAllprodutsService } from '@/services/products.service'

const ProuctList = async() => {

  const productData = await getAllprodutsService();
  console.log(productData);

  return (
    <div className='w-[100%] h-[200px] flex justify-center mt-[100px]'>
      <div className='mr-[20px]'>
        <FormProductComponent/>
      </div>
      <div>
        <TableProductComponent productData={productData}/>
      </div>

    </div>
  )
}

export default ProuctList
