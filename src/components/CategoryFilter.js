import React from "react";

function CategoryFilter({categories, selectedCat, handleCatSelection}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((cat)=>{
        return <button key= {cat} onClick={()=> handleCatSelection(cat)} className={cat === selectedCat ? 'selected': null}>{cat}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
