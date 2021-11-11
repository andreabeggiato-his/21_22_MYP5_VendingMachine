import CategoryItem from './CategoryItem';

const CategoryList = (props) => {
  const categories = props.categories;
  const onSelectCategory = props.onSelectCategory;

  const handleItemClick = (category) => {
    onSelectCategory(category);
  }

  return categories.map((category) => (
      <div className="row">
        <div className="col-12">
          <CategoryItem
            onClick={handleItemClick}
            category={category}
          />
        </div>
      </div>
    ));
};

export default CategoryList;
