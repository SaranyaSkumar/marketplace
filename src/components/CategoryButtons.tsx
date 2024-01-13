import Link from 'next/link';

const categories = [
  { name: 'Kids', path: '/kids' },
  { name: 'Women', path: '/women' },
  { name: 'Men', path: '/men' },
];

const CategoryButtons = ({ currentCategory }:any) => {
  return (
    <div className="flex flex-col space-y-2 mt-8">
      {categories.map((category) => (
        <Link key={category.name} href={category.path} className={`px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white hover:bg-indigo-700 ${currentCategory === category.name.toLowerCase() ? 'bg-indigo-500' : 'text-black'}`}>
            {category.name}
        </Link>
      ))}
    </div>
  );
};

export default CategoryButtons;