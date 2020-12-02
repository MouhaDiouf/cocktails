import React from 'react';
import { useGlobalContext } from '../context';
import Loading from './Loading';

function CocktailList() {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  return <div>cocktail list</div>;
}

export default CocktailList;
