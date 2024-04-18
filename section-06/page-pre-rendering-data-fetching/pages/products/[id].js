import fs from "fs/promises";
import path from "path";

export default function ProductDetailPAge(props) {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const { id } = params;
  const data = await getData();

  const product = data.products.find((product) => product.id === id);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map((product) => product.id);

  const paths = ids.map((id) => ({
    params: {
      id: id,
    },
  }));

  console.log(paths);

  return {
    paths: paths,
    fallback: false,
  };
}
