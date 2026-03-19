export function getCart() {
    const cartString = localStorage.getItem('cart');

    if (cartString === null) {
        localStorage.setItem('cart', "[]");
        return []
    }else{
        const cart = JSON.parse(cartString);
        return cart;
    }
}

// const sampleCart = [
//     {
//         product : {
//             productId : "123456",
//             name : "Sample Product",
//             labeledPrice : 249.99,
//             price : 199.99,
//             images : ["https://via.placeholder.com/150"]
//         },
//         qty : 2
//     },
//     {
//         product : {
//             productId : "789012",
//             name : "Another Product",
//             labeledPrice : 349.99,
//             price : 299.99,
//             images : ["https://via.placeholder.com/150"]
//         },
//         qty : 1
//     }
// ];

export function addToCart(product, qty) {
    const cart = getCart();
    const existingItem = cart.findIndex(item => {return item.product.productId === product.productId});

    if (existingItem !== -1) {
        const newQty = cart[existingItem].qty + qty;
        if(newQty <= 0){
            cart.splice(existingItem, 1);
        } else{
            cart[existingItem].qty = newQty;
        }
    } else {
        if(qty <= 0) return;
        cart.push({ 
            product : {
                productId : product.productId,
                name : product.name,
                labeledPrice : product.labeledPrice,
                price : product.price,
                images : product.images[0]
            },
            qty : qty
         });
    }

    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString);
}