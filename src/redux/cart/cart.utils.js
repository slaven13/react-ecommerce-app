export const addItemToCart = (cartItems, cartItemToAdd) => {
  const { id, name, price, imageUrl } = cartItemToAdd;
  const indexOf = cartItems.findIndex((cartItem) => cartItem.id === id);

  var newCartItems = [...cartItems];
  var newCartItem = {
    id: id,
    name: name,
    imageUrl: imageUrl,
    price: price,
  };

  if (indexOf < 0) {
    newCartItem = {
      ...newCartItem,
      quantity: 1,
      total: price,
    };

    newCartItems = [...newCartItems, newCartItem];
  } else {
    newCartItem = {
      ...newCartItem,
      quantity: cartItems[indexOf].quantity + 1,
      total: cartItems[indexOf].total + price,
    };

    newCartItems[indexOf] = newCartItem;
  }

  return newCartItems;
};
