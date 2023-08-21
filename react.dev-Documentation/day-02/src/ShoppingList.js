// Conditional rendering!

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

export function ShoppingList() {
    const listItems = products.map(product =>
        <li key={product.id} 
        style={{
            color: product.isFruit ? 'green': 'red'
            }}>
            {product.title}
        </li>
        )
    return(
        <div>
            <ul>{listItems}</ul>
        </div>
    );
}

