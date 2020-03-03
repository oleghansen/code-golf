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
}
