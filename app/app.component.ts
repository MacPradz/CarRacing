import { Component } from '@angular/core';
import { RacesComponent } from './races.component';
import {RaceService} from './race.service';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
  selector: 'racing-app',
  template: `
    <h1>{{heading}}</h1>
    <my-races></my-races>
  `,
  directives: [RacesComponent],
  providers: [RaceService, HTTP_PROVIDERS]
})
export class AppComponent {
  heading = "Ultra Racing Schedule"
}