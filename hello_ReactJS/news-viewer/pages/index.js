import React, { useState } from 'react';
import NewsList from '../components/NewsList';

const Home = () => {
  const category = match.params.category || 'all'

  return (
    <NewsList category={category} />  
  );
};

export default Home;
