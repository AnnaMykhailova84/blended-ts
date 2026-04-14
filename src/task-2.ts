type Currency = "USD" | "EUR" | "UAH";

interface ConverCurrencyParams { 
  amount: number;
  currency: Currency;
}

function convertCurrency({ amount, currency }: ConverCurrencyParams): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 45, currency: 'UAH' });

