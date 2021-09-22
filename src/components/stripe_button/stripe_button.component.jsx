import React from "react";
import StripeCheckout from "react-stripe-checkout";

const publicKey =
  "pk_test_51JcYSbC5t4n3YQWvVQaV6m1Agfa2u6C4FF3Ath42EVPcNvYLX51feeqlw5uE4rn1UGnJmib2YhsHL6ZMXVrp5FGo00HpKvcxpu";
export const StripeCheckoutButton = ({ price }) => {
  const priceInCents = price * 100;

  const onToken = (token) => {
      console.log(token);
      alert("Payment successful");
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="React E-Commerce"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publicKey}
    />
  );
};
