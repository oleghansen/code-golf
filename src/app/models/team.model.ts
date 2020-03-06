export class Team {
  id: string;
  name: string;
  task1length: number;
  task2length: number;
  task3length: number;
  task4length: number;
  task5length: number;
  task6length: number;
  task7length: number;

  constructor(name: string) {
    this.name = name;
    this.task1length = 9999;
    this.task2length = 9999;
    this.task3length = 9999;
    this.task4length = 9999;
    this.task5length = 9999;
    this.task6length = 9999;
    this.task7length = 9999;
  }

  getTaskLength(task: number){
    if(task == 1){
      return this.task1length;
    }
    if(task == 2){
      return this.task2length;
    }
    if(task == 3){
      return this.task3length;
    }
    if(task == 4){
      return this.task4length;
    }
    if(task == 5){
      return this.task5length;
    }
    if(task == 6){
      return this.task6length;
    }
    if(task == 7){
      return this.task7length;
    }
  }
}
