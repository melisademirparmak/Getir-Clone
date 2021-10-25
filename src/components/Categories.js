import React, { useState, useEffect } from 'react';
import categoryData from 'api/categories.json';
import Category from 'components/ui/Category';
import Title from 'components/ui/Title';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoryData);
  }, []);
  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <Title>Kategoriler</Title>
        <div className="grid grid-cols-4 2xl:grid-cols-12  xl:grid-cols-10 lg:grid-cols-8 md:grid-cols-6 ">
          {categories &&
            categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
