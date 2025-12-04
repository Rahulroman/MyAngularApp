import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-contest-list',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './contest-list.component.html',
  styleUrl: './contest-list.component.scss'
})
export class ContestListComponent {
contests = [
  {
    contestId: 101,
    contestName: "Sunday Mega Jackpot",
    entryPoints: 50,
    joinedUsers: 120,
    contestDate: new Date("2025-02-01")
  },
  {
    contestId: 102,
    contestName: "Daily Lucky Draw",
    entryPoints: 20,
    joinedUsers: 80,
    contestDate: new Date("2025-02-02")
  },
  {
    contestId: 103,
    contestName: "Kids Fun Lottery",
    entryPoints: 10,
    joinedUsers: 45,
    contestDate: new Date("2025-02-03")
  }
];

}
