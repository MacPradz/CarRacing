import { Component } from '@angular/core';
import { Race } from './race';
import { RACES } from './mocks';
import { FORM_DIRECTIVES } from '@angular/forms';

@Component({
  selector: 'my-races',
  templateUrl: 'app/races.component.html',
  styleUrls:['app/races.component.css'],
  directives: [FORM_DIRECTIVES]
})
export class RacesComponent {
  heading = "Ultra Racing Schedule"
  cash = 10000;
  races: Race[];
  ngOnInit(){
    this.races = RACES;
  }

  totalCost() {
    let sum = 0;
    for (let race of this.races) {
      if (race.isRacing) sum += race.entryFee;
    }
    return sum;
  }

  cashLeft() {
    return this.cash - this.totalCost();
  }

  enterRace(race){
    if (this.cashLeft()>=race.entryFee) {
      race.isRacing=true;
    }else{
      alert("you don't have enough cash");
    }
  }

  cancelRace(race){
    race.isRacing=false;
  }

}
