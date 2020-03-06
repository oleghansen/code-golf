import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  // tslint:disable-next-line: variable-name
  private _darkMode: boolean;

  get darkMode() {
    return this._darkMode;
  }

  set darkMode(bool) {
    this._darkMode = bool;
  }

  constructor() { }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }

}
