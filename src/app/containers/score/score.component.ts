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

  getClass(team: Team, task: number) {
    if (task === 1) {
      if(team.task1length === this.getBestLength(1) && team.task1length <= this.fasits[0].task1length){
        return "best fasit";
      }
      if(team.task1length === this.getBestLength(1)){
        return "best";
      }
      if(team.task1length <= this.fasits[0].task1length){
        return "fasit";
      }
    } if (task === 2) {
      if(team.task2length === this.getBestLength(2) && team.task2length <= this.fasits[0].task2length){
        return "best fasit";
      }
      if(team.task2length === this.getBestLength(2)){
        return "best";
      }
      if(team.task2length <= this.fasits[0].task2length){
        return "fasit";
      }
    } if (task === 3) {
      if(team.task3length === this.getBestLength(3) && team.task3length <= this.fasits[0].task3length){
        return "best fasit";
      }
      if(team.task3length === this.getBestLength(3)){
        return "best";
      }
      if(team.task3length <= this.fasits[0].task3length){
        return "fasit";
      }
    } if (task === 4) {
      if(team.task4length === this.getBestLength(4) && team.task4length <= this.fasits[0].task4length){
        return "best fasit";
      }
      if(team.task4length === this.getBestLength(4)){
        return "best";
      }
      if(team.task4length <= this.fasits[0].task4length){
        return "fasit";
      }
    } if (task === 5) {
      if(team.task5length === this.getBestLength(5) && team.task5length <= this.fasits[0].task5length){
        return "best fasit";
      }
      if(team.task5length === this.getBestLength(5)){
        return "best";
      }
      if(team.task5length <= this.fasits[0].task5length){
        return "fasit";
      }
    } if (task === 6) {
      if(team.task6length === this.getBestLength(6) && team.task6length <= this.fasits[0].task6length){
        return "best fasit";
      }
      if(team.task6length === this.getBestLength(6)){
        return "best";
      }
      if(team.task6length <= this.fasits[0].task6length){
        return "fasit";
      }
    } if (task === 7) {
      if(team.task7length === this.getBestLength(7) && team.task7length <= this.fasits[0].task7length){
        return "best fasit";
      }
      if(team.task7length === this.getBestLength(7)){
        return "best";
      }
      if(team.task7length <= this.fasits[0].task7length){
        return "fasit";
      }
    }
  }

  private getBestLength(task: number) {
    let best = 9998;
    this.teams.forEach(team => {
      if (this.getTaskLengthForTeam(team, task) < best) {
        best = this.getTaskLengthForTeam(team, task);
      }
    });
    return best;
  }

  private getTaskLengthForTeam(team: Team, task: number) {
    if (task === 1) {
      return team.task1length;
    }
    if (task === 2) {
      return team.task2length;
    }
    if (task === 3) {
      return team.task3length;
    }
    if (task === 4) {
      return team.task4length;
    }
    if (task === 5) {
      return team.task5length;
    }
    if (task === 6) {
      return team.task6length;
    }
    if (task === 7) {
      return team.task7length;
    }
  }

  scoreClass(score: Score){
    if(score.score === this.getBestScore()){
      return "best";
    }
  }

  private getBestScore() {
    var best = 0;
    this.scores.forEach(score => {
      if (score.score > best) {
        best = score.score;
      }
    });
    return best;
  }

  isDarkModeEnabled() {
    return this.themeService.darkMode;
  }
}
