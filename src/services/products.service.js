export const getAllprodutsService = async () =>{
    const res = await fetch ('https://6669c1012e964a6dfed67e53.mockapi.io/product',
        {
            cache: "no-store",
            method: "GET",
            next: {tag: ['product']}
        }
    );
    const data =await res.json();
    // console.log("data",data);
    return data;   
}

export const insertProductService = async (productData) =>{
    const res = await fetch ('https://6669c1012e964a6dfed67e53.mockapi.io/product',
        {
            method: "POST",
            body: JSON.stringify(productData),
            headers: {
                "Content-type" : "application/json"
            }
        }
    );
    const data =await res.json();
    return data;
}

export const deleteProductService = async (productId) =>{
    const res = await fetch(`https://6669c1012e964a6dfed67e53.mockapi.io/product/${productId}`,
        {
            method: "DELETE",
        }
    );
    const data =await res.json();
    return data;
}

// export const editProuductService = async (productId,productData) =>{
//     const res = await fetch(`https://6669c1012e964a6dfed67e53.mockapi.io/product/${productId}`,
//         {
//             method: "PUT",
//             body: "JSON.stringify(productData)",
//             headers: {
//                 "Content-type" : "application/json"
//             }
//         }
//     )
//     const data = await res.json();
//     return data;

// }