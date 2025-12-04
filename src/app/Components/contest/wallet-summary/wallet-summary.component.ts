import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-wallet-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wallet-summary.component.html',
  styleUrl: './wallet-summary.component.scss'
})
export class WalletSummaryComponent {

  summary = {totalPoints : 12};
}
