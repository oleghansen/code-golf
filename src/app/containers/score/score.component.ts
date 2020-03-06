import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team.service';
import { Score } from 'src/app/models/score.model';
import { ThemeService } from 'src/app/services/theme.service';
import { ScoreService } from 'src/app/services/score.service';
import { Fasit } from 'src/app/models/fasit.model';
import { FasitService } from 'src/app/services/fasit.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  teams$: Observable<Team[]>;
  teams: Team[];
  fasits$: Observable<Fasit[]>;
  fasits: Fasit[];
  scores$: Observable<Score[]>;
  scores: Score[];

  constructor(
    private teamService: TeamService,
    private fasitService: FasitService,
    private themeService: ThemeService,
    private scoreService: ScoreService
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
    this.fasitService.getAllFasits().subscribe((res => {
      this.fasits = res.map(fasit => {
        return {
          id: fasit.payload.doc.id,
          ...fasit.payload.doc.data()
        } as Fasit;
      });
    })
    );
  }

  isDarkModeEnabled() {
    return this.themeService.darkMode;
  }
}
