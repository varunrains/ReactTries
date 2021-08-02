import { promises as fs } from "fs";
import path from 'path';
import Link from 'next/link';

function HomePage(props) {
    const { products } = props;

  return (
      <ul>
          {products.map((product) =>
              (<li key={product.id}><Link href={`/${product.id}`}>{product.title}</Link></li>))}
    </ul>
  );
}

//Code inside this will not be shown to the client
export async function getStaticProps() {
    //getStaticProps will return an "Object" which should have
    //a "props" key inside it. This is must
    //process is the global function in Node.js, cwd is current working directory
    const filePath = path.join(process.cwd(), 'data','dummy-backend.json');
    //This will be the overall project folder and not pages folder
    const jsonData = await fs.readFile(filePath);
    console.log(jsonData);
    const data = JSON.parse(jsonData);

    return {

        props: {
            products: data.products
        }
    };
}

export default HomePage;
