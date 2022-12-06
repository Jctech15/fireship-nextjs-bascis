import { useRouter } from "next/router";
import Head from "next/head";

export default function Game({ game }) {
  const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <Head>I am the HEAD, OKAY?</Head>
      <h1>{game.id} </h1>
      <img src={game.image} width="500px" />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
    props: { game: data },
  };
}
