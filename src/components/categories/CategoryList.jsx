const CategoryList = (props) => {
  const categories = props.categories;


  categories.map((category) => {
    return (
      <div className="row">
        <div className="col-12">
          {category.name}
        </div>
      </div>
    );
  });

  // const categoryElements = [];
  // for (let i = 0; i < categories.length; i = i + 1) {
  //   const category = categories[i];
  //   categoryElements.push((
  //     <div className="row">
  //       <div className="col-12">
  //         {category.name}
  //       </div>
  //     </div>
  //   ));
  // }

  return (
    <>
      <div className="row">
        <div className="col-12">
          {categories[0].name}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {categories[1].name}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {categories[2].name}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {categories[3].name}
        </div>
      </div>
   </>
  )
};

export default CategoryList;