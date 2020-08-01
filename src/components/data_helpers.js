

function getProductsByCategory(data, categoria, init, end){
    var products;
    
    products = data.filter((product, index) => {
      if(product.node.categoria == categoria){
        return true
      };
    }).map(value => value.node)
    .slice(init, end);

    return products
  }



  export { getProductsByCategory }