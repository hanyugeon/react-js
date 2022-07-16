import React, { useState, useCallback } from 'react';
import Header from './Header';
import NewsList from './NewsList';

const Layout = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((c) => setCategory(c), []);

  return (
    <>
      <Header category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  )
}

export default Layout;
