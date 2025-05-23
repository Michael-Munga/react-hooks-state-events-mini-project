import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  const categoryButtons = categories.map((category) => {
    const isSelected = category === selectedCategory;
    return (
      <button
        key={category}
        className={isSelected ? "selected" : ""}
        onClick={() => onCategoryChange(category)}
      >
        {category}
      </button>
    );
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */ categoryButtons}
    </div>
  );
}

export default CategoryFilter;
