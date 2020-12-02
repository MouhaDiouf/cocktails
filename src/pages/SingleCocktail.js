import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  return <div></div>;
}

export default SingleCocktail;
