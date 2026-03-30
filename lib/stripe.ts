// Import the Stripe library
import Stripe from 'stripe';

// Initialize Stripe with your secret key
const stripe = new Stripe('your_secret_key_here', {
  apiVersion: '2022-08-01',
});

// Create a Payment Intent
export const createPaymentIntent = async (amount, currency) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
        });
        return paymentIntent;
    } catch (error) {
        throw new Error(`Error creating payment intent: ${error.message}`);
    }
};

// Retrieve a Payment Intent
export const retrievePaymentIntent = async (paymentIntentId) => {
    try {
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
        return paymentIntent;
    } catch (error) {
        throw new Error(`Error retrieving payment intent: ${error.message}`);
    }
};

// Confirm a Payment Intent
export const confirmPaymentIntent = async (paymentIntentId) => {
    try {
        const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId);
        return paymentIntent;
    } catch (error) {
        throw new Error(`Error confirming payment intent: ${error.message}`);
    }
};

// Create a Refund
export const createRefund = async (paymentIntentId) => {
    try {
        const refund = await stripe.refunds.create({
            payment_intent: paymentIntentId,
        });
        return refund;
    } catch (error) {
        throw new Error(`Error creating refund: ${error.message}`);
    }
};