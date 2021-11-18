import React from 'react';

import CategoryList from '../components/categories/CategoryList';
import ProductGrid from '../components/products/ProductGrid';


const categories = [
  {
    id: 1,
    name: 'Cold food',
  },
  {
    id: 2,
    name: 'Cold drink',
  },
  {
    id: 3,
    name: 'Hot food',
  },
  {
    id: 4,
    name: 'Hot drink',
  },
];

const products = [
  {
    id: 1,
    name: 'Egg',
    price: 5,
    categoryId: 1,
  },
  {
    id: 2,
    name: 'Peach',
    price: 12,
    categoryId: 1,
  },
  {
    id: 3,
    name: 'Tree juice',
    price: 8,
    categoryId: 2,
  },
  {
    id: 4,
    name: 'Sile water',
    price: 1.43,
    categoryId: 2,
  },

];

const Page = () => {

  const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);
  const [money, setMoney] = React.useState(3);

  const filteredProducts = products.filter((product) => product.categoryId === selectedCategoryId);
  
  const handleSelectCategory = (category) => {
    setSelectedCategoryId(category.id);
  };

  return (
    <div className="row">
      <div className="col-2">
        <CategoryList
          categories={categories}
          onSelectCategory={handleSelectCategory}
        />
      </div>
      <div className="col-8">
        <ProductGrid
          money={money}
          products={filteredProducts}
        />
      </div>
      <div className="col-2">
        {money}
      </div>
    </div>
  );
};

export default Page;
