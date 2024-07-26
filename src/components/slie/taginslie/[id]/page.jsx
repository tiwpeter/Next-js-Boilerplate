import Product from "../../componet/detailslie"

export async function generateStaticParams() {
    const res = await fetch('https://dummyjson.com/products?limit=10&select=title,price')
    const data = await res.json()

    return data.products.map((product) => ({
        id: product.id.toString(),
    }))
  }
  
  // loop
  async function getProducts(ids){
    const promises = []
    for (const id of ids) {
        const res = fetch(`https://dummyjson.com/products/${id}`);
        promises.push(res)
    }
    const data = await Promise.all(promises)
    return await Promise.all(data.map((d => d.json())))
  }

export default async function ProductPage({params}) {
    const products = await getProducts(params.id)
    //console.log({products})
    return (
        
            products.length > 0 && (
                products.map(({title,price,id})=> (
<Product noButton title={title} price={price} key={id}/>
                ))
            )
        
        
    )
}