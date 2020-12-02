import React from 'react';
import { useGlobalContext } from '../context';
import Cocktail from './Cocktail';
import Loading from './Loading';

function CocktailList() {
  const { cocktails, loading } = useGlobalContext();
  console.log(cocktails);
  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        No cocktails match your search criteria{' '}
      </h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default CocktailList;
