const products = [
    { id: 1, title: 'Book1' },
    { id: 2, title: 'Book2' },
    { id: 3, title: 'Book3' },
    { id: 4, title: 'Book4' },
    { id: 5, title: 'Book5' },
    { id: 6, title: 'Book6' },
    { id: 7, title: 'Book7' },
];
 
const ProductList = () => {
    // products.map(product => (product.lowerCase = product.title.toLowerCase()
    // ));
    return (
        <div>

            {products.map((product) => (
                <div key={product.id}>
                    <h1>{product.id}: {product.title.toLowerCase()}</h1>
                    <p>{product.lowerCase}</p>
                </div>
            ))}
        </div>
    )
};

export default ProductList;