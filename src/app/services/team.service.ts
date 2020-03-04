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

  updateLength(name: string, task : number, length: number) {
    var teamRef = this.firestore.collection("team").doc(name);
    if(task == 1){
      return teamRef.update({
          task1length: length
      })
    }
    if(task == 2){
      return teamRef.update({
          task2length: length
      })
    }
    if(task == 3){
      return teamRef.update({
          task3length: length
      })
    }
    if(task == 4){
      return teamRef.update({
          task4length: length
      })
    }
    if(task == 5){
      return teamRef.update({
          task5length: length
      })
    }
    if(task == 6){
      return teamRef.update({
          task1length: length
      })
    }
    
  }
}
