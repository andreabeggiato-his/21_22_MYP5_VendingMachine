const ProductItem = (props) => {
  const product = props.product;
  const canPurchase = props.money >= props.product.price;
  const onBuy = props.onBuy;

  const bgColorClass = canPurchase ? 'bg-info' : 'bg-danger';

  const handleClick = () => {
    if (props.money >= product.price) {
      onBuy(product);
    }
    else {
      alert('Insert money');
    }
  };

  return (
    <div onClick={handleClick} className={`card ${bgColorClass}`}>
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
