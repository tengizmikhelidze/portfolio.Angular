import { Component } from '@angular/core';
import {LandingHeaderComponent} from './sections/header/landing-header.component';

@Component({
  selector: 'app-landing',
  imports: [
    LandingHeaderComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
