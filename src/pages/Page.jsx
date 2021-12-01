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

  const handle5Click = () => {
    setMoney(money + 5);
  };

  const handle2Click = () => {
    setMoney(money + 2);
  };

  const handle1Click = () => {
    setMoney(money + 1);
  };

  const handle05Click = () => {
    setMoney(money + 0.5);
  };

  const handle02Click = () => {
    setMoney(money + 0.2);
  };

  const handle01Click = () => {
    setMoney(money + 0.1);
  };

  const handleBuy = (product) => {
    setMoney(money - product.price)
  }

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
          onBuy={handleBuy}
        />
      </div>
      <div className="col-2">
        <div className="row">
          <div className="col-12" style={{ fontFamily: 'monospace' }}>
            <h4>{money.toFixed(2)}</h4>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <div class="btn-group" role="group">
              <button onClick={handle5Click} type="button" class="btn btn-primary">$5</button>
              <button onClick={handle2Click} type="button" class="btn btn-primary">$2</button>
              <button onClick={handle1Click} type="button" class="btn btn-primary">$1</button>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <div class="btn-group" role="group">
              <button onClick={handle05Click} type="button" class="btn btn-primary">$0.50</button>
              <button onClick={handle02Click} type="button" class="btn btn-primary">$0.20</button>
              <button onClick={handle01Click} type="button" class="btn btn-primary">$0.10</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
