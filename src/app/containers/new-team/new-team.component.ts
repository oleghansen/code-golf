import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.scss']
})
export class NewTeamComponent {

  teamName: string;

  constructor(private teamService: TeamService, private themeService: ThemeService, private firestore: AngularFirestore) { }

  addTeam() {
    const team = Object.assign({}, new Team(this.teamName));
    this.teamService.addTeam(team);
  }

  isDarkModeEnabled() {
    return this.themeService.darkMode;
  }
}
