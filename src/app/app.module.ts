import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { TeamService } from './services/team.service';
import { ScoreComponent } from './containers/score/score.component';
import { NewTeamComponent } from './containers/new-team/new-team.component';
import { FormsModule } from '@angular/forms';
import { RegisterScoreComponent } from './containers/register-score/register-score.component';
import { OrderByPipe } from './shared/pipes/order-by.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { materialModules } from './shared/material.modules';
import { ScoreService } from './services/score.service';


@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    NewTeamComponent,
    RegisterScoreComponent,
    OrderByPipe
  ],
  imports: [
    materialModules,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
  ],
  providers: [TeamService, ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
