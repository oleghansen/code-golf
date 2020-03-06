import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private firestore: AngularFirestore) { }

  addTeam(team: Team) {
    this.firestore.collection<Team>('team').doc(team.name).set(team);
  }

  getAllTeams() {
    return this.firestore.collection<Team>('team').snapshotChanges();
  }

  updateLength(team: Team, task: number, length: number) {
    const teamRef = this.firestore.collection('team').doc(team.name);
    switch (task) {
      case 1:
        return teamRef.update({
          task1length: length
        });
      case 2:
        return teamRef.update({
        task2length: length
        });
      case 3:
        return teamRef.update({
          task3length: length
        });
      case 4:
        return teamRef.update({
          task4length: length
        });
      case 5:
        return teamRef.update({
          task5length: length
        });
      case 6:
        return teamRef.update({
          task6length: length
        });
      case 7:
        return teamRef.update({
          task7length: length
        });
    }
  }
}
