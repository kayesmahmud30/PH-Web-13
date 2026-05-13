import React from "react";

const ProductsPage = async () => {
  const productsRes = await fetch("http://localhost:8008/products");
  const products = await productsRes.json();

  return (
    <div>
      <h2>All products are here</h2>

      <div className="grid grid-cols-3 gap-2">
        {products.map((product) => (
          <div key={product.id} className="border border-red-400">
            <h1>{product.name}</h1>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
