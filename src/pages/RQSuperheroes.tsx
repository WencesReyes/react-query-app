import { QueryFunctionContext, useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";

const getPost = async (params: QueryFunctionContext<(string | number)[], number>) => {
  const [, postId] = params.queryKey;
  
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  return data;
}

const RQSuperheroes = () => {
  const [postId, setPostId] = useState<number>(1);
  const { data, isLoading } = useQuery(
    ['post', postId],
     getPost,
     {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
     })

  console.log({ data, isLoading });

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <h2>Post</h2>
      <div>{data?.title}</div>
      {/* {data?.data.map((hero: any) => {
        return <div key={hero.name}>{hero.name}</div>
      })} */}
      <input type='number' value={postId} onChange={({ target }) => setPostId(+target.value)} />
    </>
  )
}

export default RQSuperheroes;