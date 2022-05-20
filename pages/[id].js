import { useRouter } from "next/router";

export default function Home({ planet }) {
  const router = useRouter();
  const { id } = router.query;

  function currentPlanet(id) {
    var item = planet.find((item) => item.id.toString() == id);

    return item;
  }
  const curr = currentPlanet(id);
  console.log(curr);
  return (
    <div>
      <h1>{curr.name}</h1>
    </div>
  );
}

export async function getServerSideProps() {
  const req = await fetch(`http://localhost:3000/data.json`);
  const data = await req.json();
  //   const planetData = data[params.id];
  return {
    props: { planet: data },
  };
}
