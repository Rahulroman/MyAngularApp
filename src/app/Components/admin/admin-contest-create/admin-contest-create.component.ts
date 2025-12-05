import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contest } from '../../../models/contest.model'
import { ApiService } from '../../../Services/core/api.service';


@Component({
  selector: 'app-admin-contest-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-contest-create.component.html',
  styleUrl: './admin-contest-create.component.scss'
})
export class AdminContestCreateComponent {

  constructor(private apiCall : ApiService) { }

model = {
  contestName :'',
  description:'',
  entryPoints: 0,
  TotalWinners:0,
  maxUsers: 0,
  contestDate :'',
   resultDeclareTime: '',

}

SaveContest(){

  this.apiCall.postCall("Contests/CreateContest" , this.model).subscribe({
    next: (res) => { alert(res.response);  },
    error: (err) => {}
  })


}


save(){}



}
