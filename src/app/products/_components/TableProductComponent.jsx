import React from 'react'
import ButtonDeleteProductComponent from './ButtonDeleteProductComponent';

const TableProductComponent = ({ productData }) => {
  console.log(productData);
  return (
    <div>
      <div className=" flex justify-center ">
        <table className=" text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr key={productData.id}>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                {/* Avatar */}
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {productData.map((e) => (
              <tr key={e?.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {e?.id}
                </th>
                <td className="px-6 py-4">
                  {e?.name}
                </td>
                <td className="px-6 py-4">
                  {/* {e?.avatar} */}
                </td>
                <td className="px-6 py-4">
                  {e?.createdAt}
                </td>
                <td className="px-6 py-4">
                  <ButtonDeleteProductComponent productId= {e.id}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default TableProductComponent
