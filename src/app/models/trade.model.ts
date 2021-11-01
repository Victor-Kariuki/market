export interface Trade {
  itemId: string;
  initiator: string;
  account: string;
  amount: number;
  status: string;
  escrow: string;
  dateCreated: string;
  messages: string[];
}
