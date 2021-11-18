const ProductItem = (props) => {
  const product = props.product;
  const canPurchase = props.money >= props.product.price;

  const bgColorClass = canPurchase ? 'bg-success' : 'bg-danger';

  return (
    <div className={`card ${bgColorClass} bg-opacity-25`}>
      <div className="card-body">
        <div className="row">
          <div className="col-6">
            <div className="card-text">
              {product.name}
            </div>
          </div>
          <div className="col-6">
            <div className="text-end card-text">
              $ {product.price.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
