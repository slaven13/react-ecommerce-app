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

export const clearItemFromCart = (cartItems, cartItemId) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemId);

  if (!existingCartItem) {
    return;
  }

  return cartItems.filter((cartItem) => cartItem.id !== cartItemId);
};

export const removeItem = (cartItems, cartItemToRemoveId) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemoveId
  );

  if (!existingCartItem) {
    return;
  }

  if (existingCartItem.quantity === 1) {
    return cartItems.map((cartItem) => cartItem.id !== cartItemToRemoveId);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItem
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
          total: cartItem.total - cartItem.price,
        }
      : cartItem
  );
};
