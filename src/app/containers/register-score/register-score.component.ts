import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Team } from 'src/app/models/team.model';

@Component({
  selector: 'app-register-score',
  templateUrl: './register-score.component.html',
  styleUrls: ['./register-score.component.scss']
})
export class RegisterScoreComponent implements OnInit {

  teams: Team[];
  tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5', 'Task 6'];

  selectedTeam: Team;
  selectedTask: string;
  solutionLength: number;

  constructor(private teamService: TeamService, private firestore: AngularFirestore) { }

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

  submitScore() {
    if (!!this.selectedTeam && !!this.selectedTask && !!this.solutionLength) {
      console.log('score submitted', this.selectedTeam, this.selectedTask, this.solutionLength);
    }
  }
}
