const CategoryItem = (props) => {
  const category = props.category;
  const onClick = props.onClick;

  const handleClick = () => {
    onClick(category);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-body">
        <div className="card-text">
          {category.name}
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
