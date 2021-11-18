const ProductItem = (props) => {
  const product = props.product;

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-text">
          {product.name}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
