import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Team } from 'src/app/models/team.model';
import { ThemeService } from 'src/app/services/theme.service';
import { cloneDeep } from 'lodash';
@Component({
  selector: 'app-register-score',
  templateUrl: './register-score.component.html',
  styleUrls: ['./register-score.component.scss']
})
export class RegisterScoreComponent implements OnInit {

  teams: Team[];
  tasks = [1, 2, 3, 4, 5, 6, 7];

  selectedTeam: Team;
  selectedTask: number;
  solutionLength: number;

  constructor(private teamService: TeamService, private themeService: ThemeService, private firestore: AngularFirestore) { }

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

  setTeam(team: Team) {
    this.selectedTeam = team;
  }

  setTask(task: number) {
    this.selectedTask = task;
  }

  submitScore() {
    if (!!this.selectedTeam && !!this.selectedTask && !!this.solutionLength) {
      console.log('score submitted', this.selectedTeam, this.selectedTask, this.solutionLength);
      this.teamService.updateLength(this.selectedTeam, this.selectedTask, this.solutionLength);
      this.resetForm();
    }
  }

  isDarkModeEnabled() {
    return this.themeService.darkMode;
  }

  teamHasExistingScoreForTask(): boolean {
    if (!!this.selectedTeam && !!this.selectedTask) {
      const length = this.getTaskLengthForSelectedTeam(this.selectedTask);
      return (length > 0 && length < 9999);
    }
    return false;
  }

  getTeamsBestScoreForSelectedTask(): number {
    return (this.getTaskLengthForSelectedTeam(this.selectedTask));
  }

  private getTaskLengthForSelectedTeam(task: number) {
    if (task === 1) {
      return this.selectedTeam.task1length;
    }
    if (task === 2) {
      return this.selectedTeam.task2length;
    }
    if (task === 3) {
      return this.selectedTeam.task3length;
    }
    if (task === 4) {
      return this.selectedTeam.task4length;
    }
    if (task === 5) {
      return this.selectedTeam.task5length;
    }
    if (task === 6) {
      return this.selectedTeam.task6length;
    }
    if (task === 7) {
      return this.selectedTeam.task7length;
    }
  }

  private resetForm() {
    this.selectedTask = null;
    this.selectedTeam = null;
    this.solutionLength = null;
  }
}
