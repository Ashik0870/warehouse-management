export const calculateAvailabilityPercentage = (quantity: any, available: any) => {
    if (quantity === 0) {
      return 0;
    }
    console.log(quantity);
    console.log(available);
    return ((available / quantity) * 100).toFixed();
  };