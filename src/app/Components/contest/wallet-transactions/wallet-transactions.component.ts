import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
CommonModule

@Component({
  selector: 'app-wallet-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wallet-transactions.component.html',
  styleUrl: './wallet-transactions.component.scss'
})
export class WalletTransactionsComponent {
list = [
  {
    transactionId: 1,
    transactionType: "ADD",
    points: 100,
    description: "Daily bonus credited",
    createdDate: new Date("2025-01-15T10:30:00")
  },
  {
    transactionId: 2,
    transactionType: "DEDUCT",
    points: 50,
    description: "Joined Mega Contest",
    createdDate: new Date("2025-01-16T14:20:00")
  },
  {
    transactionId: 3,
    transactionType: "ADD",
    points: 200,
    description: "Referral reward received",
    createdDate: new Date("2025-01-17T09:45:00")
  },
  {
    transactionId: 4,
    transactionType: "DEDUCT",
    points: 30,
    description: "Joined Lucky Draw",
    createdDate: new Date("2025-01-18T18:00:00")
  }
];

}
