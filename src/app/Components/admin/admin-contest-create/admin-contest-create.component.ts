import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contest } from '../../../models/contest.model'

@Component({
  selector: 'app-admin-contest-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-contest-create.component.html',
  styleUrl: './admin-contest-create.component.scss'
})
export class AdminContestCreateComponent {

model = {
  contestName :'',
  description:'',
  entryPoints: 0,
  maxUsers: 0,
  joinedUsers: 0,
  resultDeclareTime: '',
  contestDate :'',
  status :'',
  totalWinners : 0

}




save(){}



}
