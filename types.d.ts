export enum CurrencyISO {
  Gbp = "GBP",
}

export interface Statement {
  id: string;
  provider: Provider;
  balance: Balance;
  transactions: Transaction[];
}

export interface Provider {
  title: string;
  account_number: string;
  sort_code: string;
  description: string;
}

export interface Balance {
  amount: number;
  currency_iso: CurrencyISO;
}

export interface Transaction {
  id: string;
  date: Date;
  description: string;
  category_title: string;
  amount: Amount;
}

export interface Amount {
  value: number;
  currency_iso: CurrencyISO;
}
