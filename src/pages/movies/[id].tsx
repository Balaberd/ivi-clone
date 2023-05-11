import { useRouter } from "next/router";

const MoviePage = () => {
  const { query } = useRouter();
  return <h1>СТРАНИЦА ФИЛЬМА С ID {query.id}</h1>;
};

export default MoviePage;
