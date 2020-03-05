import { Component, OnInit } from '@angular/core';
import { TeamService } from './services/team.service';
import { Team } from './models/team.model';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'cx-code-golf';
  darkMode: boolean;

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }
}
