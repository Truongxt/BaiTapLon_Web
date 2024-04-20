function searchProducts() {
    var input, filter, products, product, productName, i, foundProducts;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    products = document.getElementsByClassName('product-item');
    foundProducts = [];

    for (i = 0; i < products.length; i++) {
        product = products[i];
        productName = product.getElementsByTagName('h5')[0];
        if (productName.innerHTML.toUpperCase().indexOf(filter) > -1) {
            foundProducts.push(product);
        }
    }

    // Di chuyển sản phẩm tìm thấy lên đầu danh sách
    var container = document.querySelector('.shop_list');
    foundProducts.forEach(function(foundProduct) {
        container.insertBefore(foundProduct, container.firstChild);
    });

    // Ẩn các sản phẩm không tìm thấy
    for (i = 0; i < products.length; i++) {
        product = products[i];
        productName = product.getElementsByTagName('h5')[0];
        if (productName.innerHTML.toUpperCase().indexOf(filter) > -1) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    }
}
