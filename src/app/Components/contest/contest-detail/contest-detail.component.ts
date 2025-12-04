import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contest-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contest-detail.component.html',
  styleUrl: './contest-detail.component.scss'
})
export class ContestDetailComponent {
  route = inject(ActivatedRoute);
contest = {
  contestId: 101,
  contestName: "Mega Super Lottery",
  description: "Join the biggest lottery event and win exciting prizes!",
  entryPoints: 50,
  maxUsers: 100,
  joinedUsers: 45,
  contestDate: new Date("2025-02-01"),
  joinedByCurrentUser: false   // Change to true to test the second UI
};
 contestId: any;
ngOnInit(){
 this.contestId = this.route.snapshot.paramMap.get('id');
 console.log( this.contestId);
 

}


}
