const CategoryItem = (props) => {
  const category = props.category;
  const onClick = props.onClick;

  const handleClick = () => {
    onClick(category);
  };

  return (
    <div onClick={handleClick}>
      {category.name}
    </div>
  );
};

export default CategoryItem;
