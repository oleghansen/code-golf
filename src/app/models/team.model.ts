export class Team {
  id: string;
  name: string;
  task1length: number;
  task2length: number;
  task3length: number;
  task4length: number;
  task5length: number;
  task6length: number;

  constructor(name: string) {
    this.name = name;
    this.task1length = 9999;
    this.task2length = 9999;
    this.task3length = 9999;
    this.task4length = 9999;
    this.task5length = 9999;
    this.task6length = 9999;
  }
}
