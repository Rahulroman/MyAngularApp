import { Routes } from '@angular/router';
import { RegisterComponent } from './Components/auth/register/register.component';
import { LoginComponent } from './Components/auth/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard/dashboard.component';
import { authGuard } from './guard/auth/auth.guard';
import { AdminContestCreateComponent } from './Components/admin/admin-contest-create/admin-contest-create.component';
import { AdminContestListComponent } from './Components/admin/admin-contest-list/admin-contest-list.component';
import { ContestDetailComponent } from './Components/contest/contest-detail/contest-detail.component';
import { WalletSummaryComponent } from './Components/contest/wallet-summary/wallet-summary.component';
import { WalletTransactionsComponent } from './Components/contest/wallet-transactions/wallet-transactions.component';
import { AdminDashboardComponent } from './Components/admin/admin-dashboard/admin-dashboard.component';
import { AdminDeclareResultComponent } from './Components/admin/admin-declare-result/admin-declare-result.component';
import { ContestListComponent } from './Components/contest/contest-list/contest-list.component';

export const routes: Routes = [

    { path : "register" , component : RegisterComponent},
     { path : "login" , component : LoginComponent},
     { path : "dashboard" , component : DashboardComponent,
        canActivate : [authGuard]
     },

//  {path : "ContestDetail" , component : ContestDetailComponent},
  {path : "ContestList" , component : ContestListComponent},
   
{
  path: 'contest-detail/:id',
  loadComponent: () =>
    import('./Components/contest/contest-detail/contest-detail.component').then(m => m.ContestDetailComponent)
}
,

       {path : "WalletSummary" , component : WalletSummaryComponent},
        {path : "WalletTransactions" , component : WalletTransactionsComponent},
         {path : "AdminDashboard" , component : AdminDashboardComponent},
          {path : "AdminContestList" , component : AdminContestListComponent , },
           {path : "AdminContestCreate" , component : AdminContestCreateComponent},
            {path : "AdminDeclareResult" , component : AdminDeclareResultComponent},

     {path : "" , component : LoginComponent}

];
