import { Fragment } from "react";
import { promises as fs } from "fs";
import path from 'path';

const ProductDetailPage = (props) => {
    const { loadedProduct } = props;

    return <Fragment>
        <h1>{loadedProduct.title}</h1>
        <p>{loadedProduct.description}</p>
    </Fragment>
};


async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    //This will be the overall project folder and not pages folder
    const jsonData = await fs.readFile(filePath);
    return JSON.parse(jsonData);
}

//context helps us to find the query parameters
//REMEMBER --> getStaticProps will run before your Component runs
//Hence here you cannot use "useRouter" like you used it in the components
//to get hold of query parameters and its values.
export async function getStaticProps(context) {
    //params are key value pairs
    const { params } = context;
    const productId = params.pid;
    const data = await getData();
   

    const product = data.products.filter(product => product.id === productId);

    return {
        props: {
            loadedProduct: product
        }
    }
}

//For dynamic paths you need this
export async function getStaticPaths() {
    const data = await getData();

    const ids = data.products.map(product => product.id);
    //Generally this would be the use-case as we might not 
    //know how much data is present in the server
    const pathsWithParams = ids.map(id => ({ params: { pid: id } }));

    return {
        paths: pathsWithParams,
        fallback:false
    };
}

export default ProductDetailPage;
