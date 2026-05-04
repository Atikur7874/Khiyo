import React from "react";

const DeliveryButton = ({ amount, onSuccess, onError, disabled = false }) => {
  const handleClick = async () => {
    try {
      await onSuccess({
        amount,
        method: "Cash on Delivery",
        paidAt: new Date().toISOString(),
      });
    } catch (error) {
      onError?.(error);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        disabled={disabled}
        className="w-full rounded bg-emerald-600 px-4 py-3 text-white disabled:cursor-not-allowed disabled:bg-emerald-300"
      >
        Confirm Cash on Delivery
      </button>
    </div>
  );
};

export default DeliveryButton;
