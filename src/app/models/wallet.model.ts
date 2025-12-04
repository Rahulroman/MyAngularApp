export interface WalletSummary {
  totalPoints: number;
}

export interface WalletTransaction {
  transactionId: number;
  points: number;
  transactionType: string;
  description: string;
  contestId?: number;
  createdDate: string;
}
