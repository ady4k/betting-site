import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffiliatesComponent } from './affiliates/affiliates.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { GamesListComponent } from './games/games-list/games-list.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'games', component: GamesComponent},
      {path: 'games/:id', component: GamesListComponent},
      {path: 'withdraw', component: WithdrawComponent},
      {path: 'affiliates', component: AffiliatesComponent},
      {path: 'info', component: InfoComponent},
      {path: 'members/:id', component: MemberDetailComponent},
    ]
  },
  {path: 'errors', component: TestErrorsComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: '**', component: NotFoundComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
