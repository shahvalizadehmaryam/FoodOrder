import { useRouter } from "next/router";

function Details({ data }) {
  const router = useRouter();
  if(router.isFallback){
    return <h2>Loading page...</h2>
  }
  console.log(data);
  return <div>Details</div>;
}

export default Details;
export async function getStaticPaths() {
  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();
  const foods = data.slice(0, 10);
  const paths = foods.map((food) => ({
    params: { id: food.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { params: {id} } = context;
  console.log(id);
  const res = await fetch(`http://localhost:4000/data/${id}`);
  const data = await res.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
      revalidate: 10,
    },
  };
}