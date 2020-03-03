import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { TeamService } from './services/team.service';
import { ScoreComponent } from './containers/score/score.component';
import { NewTeamComponent } from './containers/new-team/new-team.component';
import { FormsModule } from '@angular/forms';
import { RegisterScoreComponent } from './containers/register-score/register-score.component';


@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    NewTeamComponent,
    RegisterScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
