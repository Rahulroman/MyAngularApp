import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule,FormGroupDirective } from '@angular/forms';
import { ApiService } from '../../../Services/core/api.service';
import { ContestModule } from '../../contest/contest.module';



@Component({
  selector: 'app-admin-contest-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-contest-list.component.html',
  styleUrl: './admin-contest-list.component.scss'
})
export class AdminContestListComponent {

  constructor (private apicall : ApiService) { }

 contests = Inject(ContestModule);


 ngOnInit():void {
  this.apicall.getCall("Contests/GetAllContests").subscribe({
    next: (res)=>{  this.contests = res; },
    error: (err)=>{},
  })



}


}