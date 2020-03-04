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
  tasks = [1, 2, 3, 4, 5, 6];

  selectedTeam: string;
  selectedTask: number;
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
      this.teamService.updateLength(this.selectedTeam, this.selectedTask, this.solutionLength);
    }
  }
}
