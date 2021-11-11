const CategoryList = (props) => {
  const categories = props.categories;

  return categories.map((category) => (
      <div className="row">
        <div className="col-12">
          {category.name}
        </div>
      </div>
    ));
};

export default CategoryList;