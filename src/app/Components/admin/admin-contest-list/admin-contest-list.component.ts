import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,FormGroupDirective } from '@angular/forms';


@Component({
  selector: 'app-admin-contest-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-contest-list.component.html',
  styleUrl: './admin-contest-list.component.scss'
})
export class AdminContestListComponent {
 contests = [
    {
      contestId: 101,
      contestName: "Mega Sunday Lottery",
      entryPoints: 50,
      joinedUsers: 120,
      status: "Open",
      contestDate: "2025-02-01"
    },
    {
      contestId: 102,
      contestName: "Daily Lucky Draw",
      entryPoints: 10,
      joinedUsers: 250,
      status: "Closed",
      contestDate: "2025-02-02"
    }
  ];
}
