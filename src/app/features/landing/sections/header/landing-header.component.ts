import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ButtonComponent} from '../../../../shared';

@Component({
  selector: 'app-landing-header',
  imports: [
    NgOptimizedImage,
    ButtonComponent
  ],
  templateUrl: './landing-header.component.html',
  styleUrl: './landing-header.component.scss'
})
export class LandingHeaderComponent {

}
