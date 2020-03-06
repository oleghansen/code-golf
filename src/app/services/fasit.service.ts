import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Fasit } from '../models/fasit.model';

@Injectable({
  providedIn: 'root'
})
export class FasitService {

  constructor(private firestore: AngularFirestore) { }

  getAllFasits() {
    return this.firestore.collection<Fasit>('fasit').snapshotChanges();
  }
}
