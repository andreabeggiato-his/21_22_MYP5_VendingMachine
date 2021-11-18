import ProductItem from './ProductItem';

const ProductGrid = (props) => {
  const products = props.products;
  const money = props.money;

  if (products.length === 0) {
    return (
      <h4>This category is empty!</h4>
    );
  }

  const productElements = products.map((product) => (
    <div className="col-4">
      <ProductItem
        money={money}
        product={product}
      />
    </div> 
  ));

  return (
    <div class="row">
      {productElements}
    </div>
  );
};

export default ProductGrid;