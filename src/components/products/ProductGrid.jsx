import ProductItem from './ProductItem';

const ProductGrid = (props) => {
  const products = props.products;

  if (products.length === 0) {
    return (
      <h4>This category is empty!</h4>
    );
  }

  return products.map((product) => (
      <div className="row">
        <div className="col-12">
          <ProductItem 
            product={product}
          />
        </div>
      </div>
    ));
};

export default ProductGrid;