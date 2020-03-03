import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScoreComponent } from './containers/score/score.component';
import { NewTeamComponent } from './containers/new-team/new-team.component';
import { RegisterScoreComponent } from './containers/register-score/register-score.component';


const routes: Routes = [
  { path: '', component: ScoreComponent },
  { path: 'scores', component: ScoreComponent },
  { path: 'new-team', component: NewTeamComponent },
  { path: 'register-score', component: RegisterScoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
