import CategoryList from '../components/categories/CategoryList';

const categories = [
  {
    id: 1,
    name: 'Cold food',
  },
  {
    id: 2,
    name: 'Cold drink',
  },
  {
    id: 3,
    name: 'Hot food',
  },
  {
    id: 4,
    name: 'Hot drink',
  },
];

const Page = () => {
  
  return (
    <div className="row">
      <div className="col-2">
        <CategoryList
          categories={categories}
        />
      </div>
      <div className="col-8">
        Col 2
      </div>
      <div className="col-2">
        Col 3
      </div>
    </div>
  );
};

export default Page;