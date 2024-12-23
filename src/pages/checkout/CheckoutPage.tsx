import React, { useState } from 'react';
import { ServiceDetailsLayout } from '../../components/services/ServiceDetailsLayout';
import { CartReview } from '../../components/checkout/CartReview';
import { PaymentSection } from '../../components/checkout/PaymentSection';
import { OrderConfirmation } from '../../components/checkout/OrderConfirmation';

interface CheckoutPageProps {
  items: Array<{ name: string; quantity: number }>;
  totalAmount: number;
}

type CheckoutStep = 'review' | 'payment' | 'confirmation';

export function CheckoutPage({ items, totalAmount }: CheckoutPageProps) {
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('review');

  const handleProceedToPayment = () => {
    setCurrentStep('payment');
  };

  const handlePaymentComplete = () => {
    setCurrentStep('confirmation');
  };

  if (currentStep === 'confirmation') {
    return <OrderConfirmation />;
  }

  return (
    <ServiceDetailsLayout title={currentStep === 'review' ? 'Cart Review' : 'Payment'}>
      <div className="max-w-lg mx-auto">
        {currentStep === 'review' ? (
          <CartReview
            items={items}
            totalAmount={totalAmount}
            onProceed={handleProceedToPayment}
          />
        ) : (
          <PaymentSection
            amount={totalAmount}
            onPaymentComplete={handlePaymentComplete}
          />
        )}
      </div>
    </ServiceDetailsLayout>
  );
}