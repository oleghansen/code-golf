import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Score } from 'src/app/models/score.model';
import { ThemeService } from 'src/app/services/theme.service';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  teams$: Observable<Team[]>;
  teams: Team[];
  scores$: Observable<Score[]>;
  scores: Score[];

  constructor(
    private teamService: TeamService,
    private themeService: ThemeService,
    private scoreService: ScoreService,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
    this.teamService.getAllTeams().subscribe((res => {
      this.teams = res.map(team => {
        return {
          id: team.payload.doc.id,
          ...team.payload.doc.data()
        } as Team;
      });
      this.scores = this.scoreService.getAllScores();
      console.log(this.scores);
    })
    );
  }

  isDarkModeEnabled() {
    return this.themeService.darkMode;
  }
}
