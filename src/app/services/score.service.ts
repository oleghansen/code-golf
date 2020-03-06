import { Injectable } from '@angular/core';
import { Team } from '../models/team.model';
import { TeamService } from './team.service';
import { Score } from '../models/score.model';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  teams: Team[];
  constructor(private teamService: TeamService) {
    this.teamService.getAllTeams().subscribe(res => {
      this.teams = res.map(team => {
        return {
          id: team.payload.doc.id,
          ...team.payload.doc.data()
        } as Team;
      });
    });
  }

  getAllScores() {
    if (!this.teams) {
      return;
    }

    const scores = [];
    const task1best = this.getBestLength(1);
    const task2best = this.getBestLength(2);
    const task3best = this.getBestLength(3);
    const task4best = this.getBestLength(4);
    const task5best = this.getBestLength(5);
    const task6best = this.getBestLength(6);
    const task7best = this.getBestLength(7);
    this.teams.forEach(element => {
      scores.push(
        this.generateScore(
          element,
          task1best,
          task2best,
          task3best,
          task4best,
          task5best,
          task6best,
          task7best
        )
      );
    });
    return scores;
  }

  generateScore(
    team: Team,
    task1best: number,
    task2best: number,
    task3best: number,
    task4best: number,
    task5best: number,
    task6best: number,
    task7best: number
  ) {
    let score = 0;
    //task 1
    if (team.task1length < 9999) {
      if (team.task1length <= task1best) {
        score += 1;
      }
      score += 1;
    }
    //task 2
    if (team.task2length < 9999) {
      if (team.task2length <= task2best) {
        score += 1;
      }
      score += 1;
    }
    //task 3
    if (team.task3length < 9999) {
      if (team.task3length <= task3best) {
        score += 1;
      }
      score += 1;
    }
    //task 4
    if (team.task4length < 9999) {
      if (team.task4length <= task4best) {
        score += 1;
      }
      score += 1;
    }
    //task 5
    if (team.task5length < 9999) {
      if (team.task5length <= task5best) {
        score += 1;
      }
      score += 1;
    }
    //task 6
    if (team.task6length < 9999) {
      if (team.task6length <= task6best) {
        score += 1;
      }
      score += 1;
    }
    //task 7
    if (team.task7length < 9999) {
      if (team.task7length <= task7best) {
        score += 1;
      }
      score += 1;
    }
    return new Score(score, team.name);
  }

  private getBestLength(task: number) {
    let best = 9999;
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
}
