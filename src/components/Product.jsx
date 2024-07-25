import axios from 'axios';
import {useQuery} from 'react-query';

function getProducts(){
    return axios.get('http://localhost:8080/sql?sql=select * from products order by product_name ASC')
/*     return [{
        product_id: 1,
        product_name: "Sugar",
        product_unit_price: 42
    }] */
}

export function Product() {
    const {data:products, isLoading, isError} = useQuery(['products'],getProducts)
    console.log("showing products",products);
    if (isLoading) {
        return <div>Cargando...</div>
    }

    return ( <table className="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Product</th>
                <th>Precio</th>
            </tr>
        </thead>
        <tbody>
            {products.data.map(product =>{ return (<tr key={product.product_id} >
                    <td>{product.product_id}</td>
                    <td>{product.product_name}</td>
                    <td>{product.unit_price}</td>
                </tr>)
                
            })}
        </tbody>
    </table>

    )
}