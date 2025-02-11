import React from "react";
import SearchBar from "../products/SearchBar";
import Category from "../products/Category";
import ProductItems from "../products/ProductItems";

function ClothProducts() {
  return (
    <div className="mt-10 w-[100%] lg:pl-[40px] lg:w-[1024] xl:pl-[55px] xl:pr-[30px] 2xl:pr-[10px]">
      <div className="sm:pl-[10px] md:pl-[20px] lg:pl-0">
        <SearchBar />
      </div>
      <div className="flex flex-col-reverse lg:flex-row lg:gap-3 xl:gap-1">
        <ProductItems
          filterIt={(product) => product.category.name === "Shoes"}
        />
        <div>
          <Category />
        </div>
      </div>
    </div>
  );
}

export default ClothProducts;
