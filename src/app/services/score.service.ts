import { Injectable } from '@angular/core';
import { Team } from '../models/team.model';
import { TeamService } from './team.service';
import { Score } from '../models/score.model';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  teams: Team[];
  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getAllTeams().subscribe((res => {
      this.teams = res.map(team => {
        return {
          id: team.payload.doc.id,
          ...team.payload.doc.data()
        } as Team;
      });
    })
    );
  }

  getAllScores() {
    var scores = new Score[this.teams.length];
    var task1best = this.getBestLength(1);
    var task2best = this.getBestLength(2);
    var task3best = this.getBestLength(3);
    var task4best = this.getBestLength(4);
    var task5best = this.getBestLength(5);
    var task6best = this.getBestLength(6);
    var task7best = this.getBestLength(7);
    this.teams.forEach(element => {
      scores.push(this.generateScore(element, task1best, task2best, task3best, task4best, task5best, task6best, task7best))
    });
    return scores;
  }

  generateScore(team: Team, task1best: number, task2best: number, task3best: number, task4best: number, task5best: number, task6best: number, task7best: number){
   var score = 0;
    //task 1
    if(team.task1length<9999){
      if(team.task1length<=task1best){
        score+=1;
      }
      score+=1;
    }
    //task 2
    if(team.task2length<9999){
      if(team.task2length<=task2best){
        score+=1;
      }
      score+=1;
    }
    //task 3
    if(team.task3length<9999){
      if(team.task3length<=task3best){
        score+=1;
      }
      score+=1;
    }
    //task 4
    if(team.task4length<9999){
      if(team.task4length<=task4best){
        score+=1;
      }
      score+=1;
    }
    //task 5
    if(team.task5length<9999){
      if(team.task5length<=task5best){
        score+=1;
      }
      score+=1;
    }
    //task 6
    if(team.task6length<9999){
      if(team.task6length<=task6best){
        score+=1;
      }
      score+=1;
    }
    //task 7
    if(team.task7length<9999){
      if(team.task7length<=task7best){
        score+=1;
      }
      score+=1;
    }
    return new Score(score, name);
  }

  getBestLength(task: number){
    var best = 9999;
    this.teams.forEach(element => {
      if(element.getTaskLength(task)<best){
        best = element.getTaskLength(task);
      }
    });
    return best;
  }
}
