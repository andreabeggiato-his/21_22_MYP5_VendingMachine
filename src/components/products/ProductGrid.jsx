const ProductGrid = (props) => {
  const products = props.products;

  return products.map((product) => (
      <div className="row">
        <div className="col-12">
          {product.name}
        </div>
      </div>
    ));
};

export default ProductGrid;