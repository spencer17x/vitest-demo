import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Home = () => {
  const params = useParams<Record<'id', string>>();

  useEffect(() => {
    console.log(params.id);
  }, [params]);

  return <div>
    Home id: {params.id}
  </div>;
};

export default Home;
