import { Component, OnInit } from '@angular/core';
import { TeamService } from './services/team.service';
import { Team } from './models/team.model';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cx-code-golf';
}
