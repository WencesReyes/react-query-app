import { useQuery } from "react-query";
import axios from "axios";

const RQSuperheroes = () => {
  const { data, isLoading } = useQuery('super-heroes', () => axios.get('http://localhost:4000/superheroes'))

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {data?.data.map((hero: any) => {
        return <div>{hero.name}</div>
      })}
    </>
  )
}

export default RQSuperheroes;